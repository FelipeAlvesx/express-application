import express from "express";
import dotenv from "dotenv";
import { jwtMiddleware } from "./middlewares/novoMiddleware.ts";
import { routerInfo } from "./routes/rotasInfo.ts";
import { routerFilmes } from "./routes/rotasFilme.ts";
import { routerAuth } from "./routes/auth/rotas.ts";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/info", jwtMiddleware, routerInfo);
app.use("/filmes", routerFilmes);
app.use(routerAuth);

app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
