import express from "express";
import jwt from "jsonwebtoken";
import { users } from "../../data/users.ts";
import type { User } from "../../model/imports.ts";

export function login(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    const segredo = process.env.JWT_SECRET;

    const existingUser = users.find(
        (user: User) => user.email === email && user.password === password,
    );

    if (!existingUser) {
        res.status(401).send("Unauthorized");
        return;
    }

    const token = jwt.sign({ email }, segredo!, { expiresIn: "1h" });
    res.json({ token });
}
