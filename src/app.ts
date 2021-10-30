import express from 'express';
import config from "config";

const app = express();
const PORT =config.get<number>("port");

app.use(express.json());

app.listen(PORT, () => console.log(`TS server started at PORT=> ${PORT}`))