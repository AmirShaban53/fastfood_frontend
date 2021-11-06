import { createLogger, format, transports } from "winston";

const logger =createLogger({
    transports:[
        new transports.Console()
    ],
    format: format.combine(
        format.colorize(),
        format.timestamp({format: 'DD-MM-YYYY HH:mm:ss'}),
        format.printf(message=> `${message.level}: ${message.timestamp}:${message.message}`)
    )
});

export default logger;