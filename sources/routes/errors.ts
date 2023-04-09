import httpStatus from "http-status";
import { Response, Request, Router } from "express";

const router = Router();

router.all("*", (req: Request, res:Response) => {
    return res.status(httpStatus.NOT_FOUND).send({status: httpStatus.NOT_FOUND, message: httpStatus[httpStatus.NOT_FOUND]});
});

export default router;