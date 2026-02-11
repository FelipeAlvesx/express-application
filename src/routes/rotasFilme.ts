import { createOne } from "./filmes/createOne.ts";
import { deleteOne } from "./filmes/deleteOne.ts";
import { findAll } from "./filmes/findAll.ts";
import { findOne } from "./filmes/findOne.ts";
import { Router } from "express";
import { jwtMiddleware } from "../middlewares/novoMiddleware.ts";

export const routerFilmes = Router();

routerFilmes.get("/", findAll);

routerFilmes.get("/:id", findOne);

routerFilmes.post("/", jwtMiddleware, createOne);

routerFilmes.delete("/:id", jwtMiddleware, deleteOne);
