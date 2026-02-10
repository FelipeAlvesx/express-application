import { filmes } from "../../data/movies.ts";
import type { Filme } from "../../model/imports.ts";
import express from "express";

export function getDiretores(req: express.Request, res: express.Response) {
    const data = new Set(
        filmes.map((filmes: Filme) => {
            return JSON.stringify(filmes.diretor);
        }),
    );
    const arr = Array.from(data).map((d) => JSON.parse(d as string));
    res.json(arr);
}
