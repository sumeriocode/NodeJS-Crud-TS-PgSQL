import { DeleteResult } from "typeorm";
import AppDataSource from "../data-source";
import { Todo } from "../entity/todo.entity";
import { PaginationResponse } from "../../todo/dto/todo.dto";

class TodoRepository {
    async get(page, limit, offset): Promise<PaginationResponse<Todo>> {


        const [todos, total]  = await AppDataSource.manager.findAndCount(Todo,{
            skip: offset,
            take: limit,
          });

        const totalPages = Math.ceil(total / limit);
        const response: PaginationResponse<Todo> = {
            data: todos,
            currentPage: page,
            totalPages: totalPages,
            totalItems: total,
            pageSize: limit,
          };

        return response;
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