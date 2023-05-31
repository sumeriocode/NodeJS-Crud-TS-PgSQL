import { Request, Response } from "express";
import todoService from "../service/todo.service";

class TodoController {
    async get(req: Request, res: Response): Promise<void> {
        const result = await todoService.get();
        res.status(200).send(result);
    }

    async getById(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const result = await todoService.getById(Number(id));
        res.status(200).send(result);
    }

    async post(req: Request, res: Response): Promise<void> {
        const todo = req.body;
        const result = await todoService.post(todo);
        res.status(200).send(result);
    }

    async put(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const todo = req.body;
        const result = await todoService.put(Number(id),todo);
        res.status(200).send(result);
    }

    async patch(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const todo = req.body;
        const result = await todoService.put(Number(id),todo);
        res.status(200).send(result);
    }

    async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const result = await todoService.delete(Number(id));
        res.status(200).send(result);
    }
}

const todoController = new TodoController();
export default todoController;