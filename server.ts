import express from "express";
import cors from "cors";
import db from "./src/config/sequelize";
import dotenv from 'dotenv';

const app = express();

app.use(cors());
app.use(express.json());
db.sync();
dotenv.config();

const port = process.env.port ?? 8000;
const server = app.listen(port, () => {
    console.log(`Servidor a la escucha. Puerto: ${port}`);
});



server.on("error", console.error);
