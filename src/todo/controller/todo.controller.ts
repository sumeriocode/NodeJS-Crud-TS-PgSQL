import { NextFunction, Request, Response } from "express";
import todoService from "../service/todo.service";
import CustomError from "../../integration/error.interface";

class TodoController {
    async get(req: Request, res: Response): Promise<void> {

        try {
            const result = await todoService.get();
            res.status(200).json({
                status: 'ok',
                data: result,
            });
        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).json({ error: error.message, details: error.details });
            }
            
        }
    }

    async getById(req: Request, res: Response): Promise<void> {

        try {
            const { id } = req.params;
            const result = await todoService.getById(Number(id));
            if (result) {
                res.status(200).json({
                    status: 'ok',
                    data: result,
                });
            }else {
                res.status(404).send("no existe el registro");
            }
        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).json({ error: error.message, details: error.details });
            }
            
        }
    }

    async post(req: Request, res: Response): Promise<void> {
        try {
            const todo = req.body;
            const result = await todoService.post(todo);
            res.status(201).json({
                status: 'ok',
                data: result,
            });
        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).json({ error: error.message, details: error.details });
            }
            
        }
    }

    async put(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const todo = req.body;
            const result = await todoService.put(Number(id), todo);
            res.status(200).json({
                status: 'ok',
                data: result,
            });

        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).send("No se puede modificar el registro");
            }
            
        }
    }

    async patch(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const todo = req.body;
            const result = await todoService.put(Number(id), todo);
            res.status(200).json({
                status: 'ok',
                data: result,
            });

        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).json({ error: error.message, details: error.details });
            }
            
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const result = await todoService.delete(Number(id));

            if(result){
                res.status(200).json({
                    status: 'ok',
                    data: result,
                });
            }else{
                res.status(404).send("no existe el registro");
            }
           

        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).json({ error: error.message, details: error.details });
            }
            
        }
    }
}

const todoController = new TodoController();
export default todoController;