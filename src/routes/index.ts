import express, { Request, Response } from "express";
import todoRouter from '../todo/routes/todo.router'
export const router = express.Router();

router.use('/todo', todoRouter);
export default router;