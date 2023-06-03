import { NextFunction, Request, Response } from "express";
import todoService from "../service/todo.service";
import CustomError from "../../integration/error.interface";
import ApiResponse from "../../interfaces/generic.response";
import { Todo } from "../../database/entity/todo.entity";
import { PaginationResponse, PaginationResponseDTO, TodoResponseDTO } from "../dto/todo.dto";

class TodoController {
    async get(req: Request, res: Response) {
        const { page, limit, offset } = req.query;
        try {
            const result = await todoService.get(page, limit, offset);
            const apiResponse = new ApiResponse<PaginationResponseDTO<TodoResponseDTO>>(res);
            apiResponse.successPagination(result);
        } catch (error) {
            if (error instanceof CustomError) {
                const apiResponse = new ApiResponse<TodoResponseDTO>(res);
                apiResponse.error('Error al obtener los usuarios', 404);
            }
            
        }
    }

    async getById(req: Request, res: Response) {

        try {
            const { id } = req.params;
            const result = await todoService.getById(Number(id));
            if (result) {
                const apiResponse = new ApiResponse<TodoResponseDTO>(res);
                apiResponse.success(result);
            }else {
                const apiResponse = new ApiResponse<TodoResponseDTO>(res);
                apiResponse.error('Error al obtener el usuario', 404);
            }
        } catch (error) {
            if (error instanceof CustomError) {
                const apiResponse = new ApiResponse<TodoResponseDTO>(res);
                apiResponse.error('Error  en el servicio', 500);
            }
            
        }
    }

    async post(req: Request, res: Response) {
        try {
            const todo = req.body;
            const result = await todoService.post(todo);
            const apiResponse = new ApiResponse<TodoResponseDTO>(res);
            apiResponse.success(result);
        } catch (error) {
            if (error instanceof CustomError) {
                const apiResponse = new ApiResponse<TodoResponseDTO>(res);
                apiResponse.error('Error  en el servicio', 500);
            }
            
        }
    }

    async put(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const todo = req.body;
            const result = await todoService.put(Number(id), todo);
            const apiResponse = new ApiResponse<TodoResponseDTO>(res);
            apiResponse.success(result);

        } catch (error) {
            if (error instanceof CustomError) {
                const apiResponse = new ApiResponse<TodoResponseDTO>(res);
                apiResponse.error('Error  en el servicio', 500);
            }
            
        }
    }

    async patch(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const todo = req.body;
            const result = await todoService.put(Number(id), todo);
            const apiResponse = new ApiResponse<TodoResponseDTO>(res);
            apiResponse.success(result);

        } catch (error) {
            if (error instanceof CustomError) {
                const apiResponse = new ApiResponse<TodoResponseDTO>(res);
                apiResponse.error('Error  en el servicio', 500);
            }
            
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await todoService.delete(Number(id));

            if(result){
                const apiResponse = new ApiResponse<boolean>(res);
                apiResponse.success(result);
            }else{
                const apiResponse = new ApiResponse<TodoResponseDTO>(res);
                apiResponse.error('No existe el registro', 404);
            }
           

        } catch (error) {
            if (error instanceof CustomError) {
                const apiResponse = new ApiResponse<TodoResponseDTO>(res);
                apiResponse.error('Error  en el servicio', 500);
            }
            
        }
    }
}

const todoController = new TodoController();
export default todoController;