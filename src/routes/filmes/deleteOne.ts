import { filmes } from "../../data/movies.ts";
import type { Filme } from "../../model/imports.ts";
import express from "express";

export function deleteOne(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const index = filmes.findIndex((f: Filme) => f.id === id);
    if (index === -1) {
        res.status(404).json({ error: "ID Not Found" });
        return;
    }
    const removedFilme = filmes.splice(index, 1);
    res.status(204).json(removedFilme);
}
