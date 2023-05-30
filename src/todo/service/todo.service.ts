class TodoService {
    async get(): Promise<any> {
        return " controller -> service -> controller"
    }
}

const todoService  = new TodoService();
export default todoService;