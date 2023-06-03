import { Todo } from "../../database/entity/todo.entity";
import todoRepository from "../../database/repository/todo.repository"
import CustomError from "../../integration/error.interface";
import logger from "../../logger";
import { TodoRequestDTO, TodoResponseDTO } from "../dto/todo.dto";

class TodoService {

    async get(): Promise<TodoResponseDTO[]> {
        try {
            const result = await todoRepository.get();
            return this.generateListTodoResponseDTO(result);
        } catch (error) {
            logger.error(error);
            throw new CustomError(500, 'Error del sistema');
        }
    }

    async getById(id: number): Promise<TodoResponseDTO> {
         try {
            const result = await todoRepository.getById(id);
            return result ? this.generateTodoResponseDTO(result) : null;
        } catch (error) {
            logger.error(error);
            throw new CustomError(500, 'Error del sistema');
        }
    }

    async post(data: TodoRequestDTO): Promise<TodoResponseDTO> {
         try {
            const result = await todoRepository.post(data);
            return this.generateTodoResponseDTO(result);
            } catch (error) {
            logger.error(error);
            throw new CustomError(500, 'Error del sistema');        
        }
    }
    
    async put(id: number, data: TodoRequestDTO): Promise<TodoResponseDTO> {
         try {
            const result = await todoRepository.put(id, data);
            return result ? this.generateTodoResponseDTO(result) : null;
        } catch (error) {
            logger.error(error);
            throw new CustomError(500, 'Error del sistema');
        }
    }

    async delete(id: number): Promise<boolean> {
         try {
           return (await todoRepository.delete(id)).affected > 0;
        } catch (error) {
            logger.error(error);
            throw new CustomError(500, 'Error del sistema');
        }
    }

    generateListTodoResponseDTO = (request: Array<Todo>): Array<TodoResponseDTO> => {
        return request.map(data => {
            return this.generateTodoResponseDTO(data);
        });
    }

    generateTodoResponseDTO = (request: Todo) => {
        const result = new TodoResponseDTO();
        result.id = request.id;
        result.name = request.name;
        return result;
    }

}


const todoService  = new TodoService();
export default todoService;