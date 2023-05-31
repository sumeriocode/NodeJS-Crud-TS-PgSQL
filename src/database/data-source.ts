import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./entity/todo.entity"

console.log(process.env.PORT);
console.log(process.env.DB_HOST);

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Todo],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log('Database connection success');
        
    })
    .catch((error) => console.log(error))

export default AppDataSource;