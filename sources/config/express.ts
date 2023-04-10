import cors from "cors";
import express from "express";

import { disconnectDatabase } from "./database";
import IndexRoutes from "../routes/index";

const app = express();
let server:any = null;

async function onShutDownServer():Promise<void> {
    if (server) {
        await disconnectDatabase();
        server.close(() => {
            process.exit(0);
        });
    }
}

export async function initializeExpressServer():Promise<void> {
    if (!server) {
        app.use(cors());
        app.use(express.json());

        app.engine('html', require("ejs").renderFile);
        app.set('view engine', 'html');

        app.use(IndexRoutes);

        server = app.listen(process.env.APP_PORT || 5000);
    }

    process.on("SIGTERM", async () => await onShutDownServer());
    process.on("SIGINT", async () => await onShutDownServer());
}