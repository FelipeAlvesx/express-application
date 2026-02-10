import { createOne } from "./filmes/createOne.ts";
import { deleteOne } from "./filmes/deleteOne.ts";
import { findAll } from "./filmes/findAll.ts";
import { findOne } from "./filmes/findOne.ts";
import { Router } from "express";

export const routerFilmes = Router();

routerFilmes.get("/filmes", findAll);

routerFilmes.get("/filmes/:id", findOne);

routerFilmes.post("/filmes", createOne);

routerFilmes.delete("/filmes/:id", deleteOne);
