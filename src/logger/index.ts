import pino, { LoggerOptions } from 'pino';

class Logger {
  private logger: pino.Logger;

  constructor() {
    const options: LoggerOptions = {
      level: process.env.LOG_LEVEL || 'info', // Nivel de registro predeterminado
      timestamp: () => `,"time":"${new Date().toISOString()}"`, // Agregar timestamp personalizado
      formatters: {
        level: (label: string) => ({ level: label }), // Formatear nivel de log personalizado
      },
      redact: ['password'], // Redactar campos sensibles
    };

    this.logger = pino(options);
  }

  public info(message: string, data?: any): void {
    this.logger.info({ data }, message);
  }

  public error(message: string, error?: Error): void {
    this.logger.error({ error }, message);
  }

  public warn(message: string, data?: any): void {
    this.logger.warn({ data }, message);
  }
}

export default new Logger();
