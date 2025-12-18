import { Logger } from "pino"

declare global {
    var logger: Logger | undefined;
}

const register = async () => {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const pino = (await import("pino")).default;
        const pinoLoki = (await import("pino-loki")).default;

        const transport = pinoLoki({
            host: process.env.LOKI_URL || "http://localhost:3100",
            batching: {
                interval: 5,
            },
            labels: {
                app: "next-app",
            }
        });

        const logger = pino(transport);
        globalThis.logger = logger;
    }
}

export {
    register,
}
