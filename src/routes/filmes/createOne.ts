import { filmes } from "../../data/movies.ts";
import type { Filme } from "../../model/imports.ts";
import express from "express";

export function createOne(req: express.Request, res: express.Response) {
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
}
