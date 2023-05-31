import todoRepository from "../../database/repository/todo.repository"

class TodoService {

    async get(): Promise<any> {
        try {
            const result = await todoRepository.get();
            return result
        } catch (error) {
            throw error
        }
         
    }

    async getById(id: number): Promise<any> {
         try {
            const result = await todoRepository.getById(id);
            return result
        } catch (error) {
            throw error
        }
    }

    async post(data: any): Promise<any> {
         try {
            const result = await todoRepository.post(data);
            return result
        } catch (error) {
            throw error
        }
    }
    
    async put(id: number, data: any): Promise<any> {
         try {
            const result = await todoRepository.put(id, data);
            return result
        } catch (error) {
            throw error
        }
    }

    async delete(id: number): Promise<any> {
         try {
            const result = await todoRepository.delete(id);
            return result
        } catch (error) {
            throw error
        }
    }
}

const todoService  = new TodoService();
export default todoService;