import express, { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
  public static errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
  }
}
