import { filmes } from "../../data/movies.ts";
import type { Genero } from "../../model/imports.ts";
import express from "express";

export function getGeneros(req: express.Request, res: express.Response) {
    const generosMap = new Map<string, Genero>();
    for (const filme of filmes) {
        for (const g of filme.genero) {
            if (!generosMap.has(g.id)) {
                generosMap.set(g.id, { id: g.id, nome: g.nome });
            }
        }
    }
    res.json(Array.from(generosMap.values()));
}
