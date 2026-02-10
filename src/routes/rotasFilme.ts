import { filmes } from "../data/movies.ts";
import type { Ator, Diretor, Filme, Genero } from "../model/imports.ts";
import { Router } from "express";

export const routerFilmes = Router();

function ingoreFields(filme: Filme, ignore: string[]) {
    const fieldsToIgnore = ignore ? ignore.toString().split(",") : [];
    const copy: Partial<Filme> = { ...filme };
    fieldsToIgnore.forEach((field: string) => {
        delete copy[field as keyof Filme];
    });
    return copy;
}

routerFilmes.get("/", (req, res) => {
    res.send("Hello World");
});

routerFilmes.get("/filmes", (req, res) => {
    const { ignore } = req.query as any;
    const moviesProcessed = filmes.map((filme: Filme) => {
        return ingoreFields(filme, ignore);
    });
    res.json(moviesProcessed);
});

routerFilmes.get("/filmes/:id", (req, res) => {
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

routerFilmes.post("/filmes", (req, res) => {
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

routerFilmes.delete("/filmes/:id", (req, res) => {
    const { id } = req.params;
    const index = filmes.findIndex((f: Filme) => f.id === id);
    if (index === -1) {
        res.status(404).json({ error: "ID Not Found" });
        return;
    }
    const removedFilme = filmes.splice(index, 1);
    res.status(204).json(removedFilme);
});
