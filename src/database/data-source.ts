import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./entity/todo.entity"
import logger from "../logger"

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
        logger.info('Database connection success');
    })
    .catch((error) => {
        logger.error(error);
    })

export default AppDataSource;