import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./entity/todo.entity"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "user-pwd",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: [Todo],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
    })
    .catch((error) => console.log(error))

export default AppDataSource;