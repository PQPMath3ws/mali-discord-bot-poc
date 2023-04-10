import 'express-async-errors';
import dotenv from "dotenv";

import { connectDatabase } from './config/database';
import { initializeDiscordBot } from './config/discord';
import { initializeExpressServer } from './config/express';

(async function (): Promise<void> {
    dotenv.config();
    await initializeExpressServer();
    connectDatabase();
    await initializeDiscordBot();
})();