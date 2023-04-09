import httpStatus from "http-status";
import { Response, Request, Router } from "express";

const router = Router();

router.all("/", (req: Request, res:Response) => {
    const { method } = req as { method: string; };
    if (method !== "GET") return res.status(httpStatus.METHOD_NOT_ALLOWED).send({status: httpStatus.METHOD_NOT_ALLOWED, message: httpStatus[httpStatus.METHOD_NOT_ALLOWED]});
    return res.status(httpStatus.OK).render(`/workspace/sources/pages/index.html`, { botClientId: process.env.DISCORD_BOT_CLIENT_ID });
});

router.all("/assets/css/index.css", (req: Request, res:Response) => {
    const { method } = req as { method: string; };
    if (method !== "GET") return res.status(httpStatus.METHOD_NOT_ALLOWED).send({status: httpStatus.METHOD_NOT_ALLOWED, message: httpStatus[httpStatus.METHOD_NOT_ALLOWED]});
    return res.status(httpStatus.OK).sendFile(`/workspace/sources/pages/css/index.css`);
});

export default router;