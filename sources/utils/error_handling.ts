import { logHandler } from "./log_handler";

export const errorHandler = (context: string, err: unknown): void => {
    const error = err as Error;

    logHandler.log("error", `Um erro apareceu no ${context}:`);

    logHandler.log("error", JSON.stringify({ errorMessage: error.message, errorStack: error.stack }));
};