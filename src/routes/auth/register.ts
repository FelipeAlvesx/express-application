import express from "express";
import { users } from "../../data/users.ts";
import type { User } from "../../model/imports.ts";

export function register(req: express.Request, res: express.Response) {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("Email and password are required");
        return;
    }

    const existingUser = users.find((user: User) => user.email === email);
    if (existingUser) {
        res.status(409).send("User already exists");
        return;
    }

    users.push({ email, password } as User);
    res.status(201).send("User registered successfully");
}
