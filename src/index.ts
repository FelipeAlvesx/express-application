import express from "express";
import dotenv from "dotenv";
import { routerInfo } from "./routes/rotasInfo.ts";
import { routerFilmes } from "./routes/rotasFilme.ts";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerInfo);
app.use(routerFilmes);
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
