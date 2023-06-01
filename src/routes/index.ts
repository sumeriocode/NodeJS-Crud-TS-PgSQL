import express, { Request, Response } from "express";
import todoRouter from '../todo/routes/todo.router'
export const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: The todo managing API
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la tarea
 *         name:
 *           type: string
 *           description: Nombre de la tarea
 *     TodoRequest:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre de la tarea
 */

router.use('/api/v1/todo', todoRouter);

export default router;