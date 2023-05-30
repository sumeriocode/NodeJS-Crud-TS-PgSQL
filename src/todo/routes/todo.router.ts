import express, { Request, Response } from "express";
import todoController from "../controller/todo.controller";
export const router = express.Router();


router.get('/', todoController.get);
router.post('/', todoController.post);
router.get('/:id', todoController.getById);
router.put('/:id', todoController.put);
router.patch('/:id', todoController.patch);
router.delete('/:id', todoController.delete);

export default router;

