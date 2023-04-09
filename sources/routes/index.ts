import { Router } from "express";

import ErrorsRoutes from "./errors";

const router = Router();

router.use(ErrorsRoutes);

export default router;