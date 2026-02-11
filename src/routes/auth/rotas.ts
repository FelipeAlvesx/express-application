import { Router } from "express";
import { login } from "./login.ts";
import { register } from "./register.ts";

export const routerAuth = Router();

routerAuth.post("/login", login);

routerAuth.post("/register", register);
