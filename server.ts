import express from "express";
import cors from "cors";
import db from "./src/config/sequelize";


const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.port ?? 8000;
db.sync();
const server = app.listen(port, () => {
    console.log(`Servidor a la escucha. Puerto: ${port}`);
});



server.on("error", console.error);
