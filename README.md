
# CRUD Whit NODEJS 




## Appendix

It is a project to start in node js and use some standard endpoint, using the postgres sql database


## Authors

- [@sumeriocode](https://www.github.com/sumeriocode)


## Features

- CRUD 
- Security JWT
- POST, GET, UPDATE, PATCH, DELETE
- Logger
- ENV

# API Reference

## Get all items

Retrieves all items.

| Method | Endpoint       |
| ------ | -------------- |
| GET    | `/api/todo`    |

## Get item

Retrieves a specific item by its ID.

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | `/api/todo/{id}` |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of item to fetch |

## Create item

Creates a new item.

| Method | Endpoint       |
| ------ | -------------- |
| POST   | `/api/todo`    |

| Body Parameters | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `name`          | `string` | **Required**. Name of the item    |
| `isActive`      | `boolean`| Indicates if the item is active   |

## Update item

Updates a specific item by its ID.

| Method | Endpoint         |
| ------ | ---------------- |
| PUT    | `/api/todo/{id}` |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of item to update |

| Body Parameters | Type     | Description                          |
| :-------------- | :------- | :------------------------------------ |
| `name`          | `string` | Name of the item (optional)           |
| `isActive`      | `boolean`| Indicates if the item is active       |

## Partial Update item

Partially updates a specific item by its ID.

| Method | Endpoint         |
| ------ | ---------------- |
| PATCH  | `/api/todo/{id}` |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of item to update |

| Body Parameters | Type     | Description                          |
| :-------------- | :------- | :------------------------------------ |
| `name`          | `string` | Name of the item (optional)           |
| `isActive`      | `boolean`| Indicates if the item is active       |

## Delete item

Deletes a specific item by its ID.

| Method | Endpoint         |
| ------ | ---------------- |
| DELETE | `/api/todo/{id}` |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of item to delete |

## Tech Stack

**Server:** Node, Express, TypeScript, Dotenv, TypeOrm, PostgreSql, OpenApi, Jest, SuperTest


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=7001`

`DB_HOST=localhost`

`DB_PORT=5432`

`DB_USER=user`

`DB_PASS=user-pwd`

`1DB_NAME=todo`




## Run Locally

Clone the project

```bash
  git clone https://github.com/sumeriocode/NodeJS-Crud-TS-PgSQL
```

Go to the project directory

```bash
  cd NodeJS-Crud-TS-PgSQL
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## FAQ

#### Is a boilerplate?

yes, from a basic project

#### Is Original?

Yes, is a Frankenstein

