import express, { Request, Response } from "express";
import todoController from "../controller/todo.controller";
export const router = express.Router();


router.get('/', todoController.get);

export default router;

