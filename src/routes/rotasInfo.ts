import { filmes } from "../data/movies.ts";
import type { Ator, Filme, Genero } from "../model/imports.ts";
import { Router } from "express";

export const routerInfo = Router();

routerInfo.get("/info/atores", (req, res) => {
    const data = new Set(
        filmes.flatMap((filmes: Filme) => {
            return filmes.elenco.map((a: Ator) => JSON.stringify(a));
        }),
    );
    const arr = Array.from(data).map((a) => JSON.parse(a as string));
    res.json(arr);
});

routerInfo.get("/info/diretores", (req, res) => {
    const data = new Set(
        filmes.map((filmes: Filme) => {
            return JSON.stringify(filmes.diretor);
        }),
    );
    const arr = Array.from(data).map((d) => JSON.parse(d as string));
    res.json(arr);
});

routerInfo.get("/info/genero", (req, res) => {
    const generosMap = new Map<string, Genero>();
    for (const filme of filmes) {
        for (const g of filme.genero) {
            if (!generosMap.has(g.id)) {
                generosMap.set(g.id, { id: g.id, nome: g.nome });
            }
        }
    }
    res.json(Array.from(generosMap.values()));
});
