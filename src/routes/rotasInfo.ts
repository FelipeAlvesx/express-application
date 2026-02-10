import { getGeneros } from "./info/getGeneros.ts";
import { getAtores } from "./info/getAtores.ts";
import { getDiretores } from "./info/getDiretores.ts";
import { Router } from "express";

export const routerInfo = Router();

routerInfo.get("/info/atores", getAtores);

routerInfo.get("/info/diretores", getDiretores);

routerInfo.get("/info/genero", getGeneros);
