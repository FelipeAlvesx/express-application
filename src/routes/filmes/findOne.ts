import { filmes } from "../../data/movies.ts";
import type { Filme } from "../../model/imports.ts";
import { ingoreFields } from "./utils/ignoreFieds.ts";
import express from "express";

export function findOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const filme = filmes.find((f: Filme) => f.id === id);
    const { ignore } = req.query;
    const fieldsToIgnore = ignore ? ignore.toString().split(",") : [];

    if (!filme) {
        res.status(404).json({ error: " ID Not Found" });
        return;
    }
    res.json(ingoreFields(filme, fieldsToIgnore));
}
