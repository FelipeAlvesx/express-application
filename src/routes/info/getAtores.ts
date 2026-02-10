import { filmes } from "../../data/movies.ts";
import type { Ator, Filme } from "../../model/imports.ts";
import express from "express";

export function getAtores(req: express.Request, res: express.Response) {
    const data = new Set(
        filmes.flatMap((filmes: Filme) => {
            return filmes.elenco.map((a: Ator) => JSON.stringify(a));
        }),
    );
    const arr = Array.from(data).map((a) => JSON.parse(a as string));
    res.json(arr);
}
