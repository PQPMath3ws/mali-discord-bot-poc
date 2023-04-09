import 'express-async-errors';
import dotenv from "dotenv";

import { initializeExpressServer } from './config/express';

(async function (): Promise<void> {
    dotenv.config();
    await initializeExpressServer();
})();