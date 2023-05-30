import todoRepository from "../../database/repository/todo.repository"

class TodoService {

    async get(): Promise<any> {
        try {
            const result = await todoRepository.get();
            return result
        } catch (error) {
            
        }
         
    }

    async getById(): Promise<any> {
        return " controller -> service -> controller"
    }

    async post(): Promise<any> {
        return " controller -> service -> controller"
    }
    
    async put(): Promise<any> {
        return " controller -> service -> controller"
    }
    
    async patch(): Promise<any> {
        return " controller -> service -> controller"
    }

    async delete(): Promise<any> {
        return " controller -> service -> controller"
    }
}

const todoService  = new TodoService();
export default todoService;