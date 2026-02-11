import express from "express";
import { users } from "../../data/users.ts";
import type { User } from "../../model/imports.ts";
import bcrypt from "bcrypt";

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
    const newUser = { email, password: bcrypt.hashSync(password, 5) };
    console.log(newUser);
    users.push(newUser);
    res.status(201).send("User registered successfully");
}
