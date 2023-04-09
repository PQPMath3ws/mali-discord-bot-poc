import { Router } from "express";

import ErrorsRoutes from "./errors";
import PagesRoutes from "./pages";

const router = Router();

router.use(PagesRoutes);
router.use(ErrorsRoutes);

export default router;