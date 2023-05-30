import { Request, Response } from "express";
import todoService from "../service/todo.service";

class TodoController {
    async get(req: Request, res: Response): Promise<void> {
        const result = await todoService.get();
        res.status(200).send(result);
    }

    async getById(req: Request, res: Response): Promise<void> {
        const result = await todoService.getById();
        res.status(200).send(result);
    }

    async post(req: Request, res: Response): Promise<void> {
        const result = await todoService.post();
        res.status(200).send(result);
    }

    async put(req: Request, res: Response): Promise<void> {
        const result = await todoService.put();
        res.status(200).send(result);
    }

    async patch(req: Request, res: Response): Promise<void> {
        const result = await todoService.patch();
        res.status(200).send(result);
    }

    async delete(req: Request, res: Response): Promise<void> {
        const result = await todoService.delete();
        res.status(200).send(result);
    }
}

const todoController = new TodoController();
export default todoController;