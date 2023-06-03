import { DeleteResult } from "typeorm";
import AppDataSource from "../data-source";
import { Todo } from "../entity/todo.entity";

class TodoRepository {
    async get(): Promise<Todo[]> {
        return await AppDataSource.manager.find(Todo);
    }

    async getById(id: number){
        return await AppDataSource.manager.findOne(Todo, { where: { id : id , isActive: true}});
    }

    async post(data: any): Promise<Todo> {
        data.isActive = true;
        return await AppDataSource.manager.save(Todo, data);
    }

    async put(id: number, updateFields : Partial<Todo>): Promise<Todo> {

        const todo = await this.getById(id);
        if(todo){
           Object.assign(todo,updateFields)
        }
        return await AppDataSource.manager.save(Todo, todo);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await AppDataSource.manager.delete(Todo, id);
    }


}

const todoRepository = new TodoRepository();
export default todoRepository;