import express from "express";
import dotenv from "dotenv";
import { filmes } from "./data/movies.ts";
import type { Filme } from "./model/imports.ts";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;

function ingoreFields(filme: Filme, ignore: string[]) {
    const fieldsToIgnore = ignore ? ignore.toString().split(",") : [];
    const copy: Partial<Filme> = { ...filme };
    fieldsToIgnore.forEach((field: string) => {
        delete copy[field as keyof Filme];
    });
    return copy;
}

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/filmes", (req, res) => {
    const { ignore } = req.query as any;
    const moviesProcessed = filmes.map((filme: Filme) => {
        return ingoreFields(filme, ignore);
    });

    res.json(moviesProcessed);
});

app.get("/filmes/:id", (req, res) => {
    const { id } = req.params;
    const filme = filmes.find((f: Filme) => f.id === id);
    const { ignore } = req.query;
    const fieldsToIgnore = ignore ? ignore.toString().split(",") : [];

    if (!filme) {
        res.status(404).json({ error: " ID Not Found" });
        return;
    }
    res.json(ingoreFields(filme, fieldsToIgnore));
});

app.post("/filmes", (req, res) => {
    const novoFilme: Filme = req.body;
    if (
        !(
            novoFilme.diretor &&
            novoFilme.titulo &&
            novoFilme.genero &&
            novoFilme.ano &&
            novoFilme.sinopse &&
            novoFilme.elenco
        )
    ) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    const id = `FIL1${filmes.length}`;
    novoFilme.id = id;
    filmes.push(novoFilme);
    res.status(201).json(novoFilme);
});

app.delete("/filmes/:id", (req, res) => {
    const { id } = req.params;
    const index = filmes.findIndex((f: Filme) => f.id === id);
    if (index === -1) {
        res.status(404).json({ error: "ID Not Found" });
        return;
    }
    const removedFilme = filmes.splice(index, 1);
    res.status(204).json(removedFilme);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
