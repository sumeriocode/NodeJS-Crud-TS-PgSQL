import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./entity/todo.entity"

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
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