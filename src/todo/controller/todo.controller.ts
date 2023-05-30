import { Request, Response } from "express";
import todoService from "../service/todo.service";

class TodoController {
    async get(req: Request, res: Response): Promise<void> {
        const result = await todoService.get();
        res.status(200).send(result);
    }
}

const todoController = new TodoController();
export default todoController;