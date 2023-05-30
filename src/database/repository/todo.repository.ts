import AppDataSource from "../data-source";
import { Todo } from "../entity/todo.entity";

class TodoRepository {
    async get(){
        return await AppDataSource.manager.find(Todo);
    }
}

const todoRepository = new TodoRepository();
export default todoRepository;