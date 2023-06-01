import todoRepository from "../../database/repository/todo.repository"
import CustomError from "../../integration/error.interface";

class TodoService {

    async get(): Promise<any> {
        try {
            const result = await todoRepository.get();
            return result
        } catch (error) {
            throw new CustomError(500, 'Error del sistema');
        }
         
    }

    async getById(id: number): Promise<any> {
         try {
            const result = await todoRepository.getById(id);
            return result
        } catch (error) {
            throw new CustomError(500, 'Error del sistema');
        }
    }

    async post(data: any): Promise<any> {
         try {
            const result = await todoRepository.post(data);
            return result
        } catch (error) {
            throw new CustomError(500, 'Error del sistema');        
        }
    }
    
    async put(id: number, data: any): Promise<any> {
         try {
            const result = await todoRepository.put(id, data);
            return result
        } catch (error) {
            throw new CustomError(500, 'Error del sistema');
        }
    }

    async delete(id: number): Promise<any> {
         try {
            const result = await todoRepository.delete(id);
            return result
        } catch (error) {
            throw new CustomError(500, 'Error del sistema');
        }
    }
}

const todoService  = new TodoService();
export default todoService;