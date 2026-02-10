import { filmes } from "../../data/movies.ts";
import type { Filme } from "../../model/imports.ts";
import { ingoreFields } from "./utils/ignoreFieds.ts";
import express from "express";

export function findAll(req: express.Request, res: express.Response) {
    const { ignore } = req.query as any;
    const moviesProcessed = filmes.map((filme: Filme) => {
        return ingoreFields(filme, ignore);
    });
    res.json(moviesProcessed);
}
