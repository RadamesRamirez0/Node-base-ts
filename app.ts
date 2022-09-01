import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import db from "./src/config/sequelize";

const app = express();

app.use(cors());
app.use(express.json());
//db.sync();

const port = process.env.PORT ?? 8000;
const server = app.listen(port, () => {
    console.log(`Servidor a la escucha. Puerto: ${port}`);
});




server.on("error", console.error);
