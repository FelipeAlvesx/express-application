import { getGeneros } from "./info/getGeneros.ts";
import { getAtores } from "./info/getAtores.ts";
import { getDiretores } from "./info/getDiretores.ts";
import { Router } from "express";

export const routerInfo = Router();

routerInfo.get("/atores", getAtores);

routerInfo.get("/diretores", getDiretores);

routerInfo.get("/genero", getGeneros);
