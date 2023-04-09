import { config, createLogger, format, transports } from "winston";

const { combine, timestamp, colorize, printf } = format as { combine: any; timestamp:any; colorize:any; printf:any; };

export const logHandler:any = createLogger({
    levels: config.npm.levels,
    level: "silly",
    transports: [
        new transports.Console()
    ],
    format: combine(
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        colorize(),
        printf((info: { level: any; timestamp: any; message: any; }) => `${info.level}: ${[info.timestamp]}: ${info.message}`)
      ),
      exitOnError: false
});