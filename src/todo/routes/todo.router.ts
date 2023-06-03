import express, { Request, Response } from "express";
import todoController from "../controller/todo.controller";
export const router = express.Router();

router.get('/', todoController.get);

/**
 * @swagger
 * /todo:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Todo]
 *     description: Devuelve todas las tareas.
 *     parameters:
 *       - name: page
 *         in: query
 *         description: The page number
 *         schema:
 *           type: integer
 *           minimum: 0
 *           default: 0
 *       - name: limit
 *         in: query
 *         description: The number of items per page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 1000
 *           default: 1
 *       - name: offset
 *         in: query
 *         description: The number of items to skip
 *         schema:
 *           type: integer
 *           minimum: 0
 *           default: 0
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Todo]
 *     description: Crea una nueva tarea.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoRequest'
 *     responses:
 *       201:
 *         description: Tarea creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
router.post('/', todoController.post);

/**
 * @swagger
 * /todo/{id}:
 *   get:
 *     summary: Obtener una tarea por ID
 *     tags: [Todo]
 *     description: Devuelve una tarea por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *
*/
router.get('/:id', todoController.getById);

/**
 * @swagger
 * /todo/{id}:
 *   put:
 *     summary: Actualizar una tarea existente
 *     tags: [Todo]
 *     description: Actualiza una tarea existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoRequest'
 *     responses:
 *       200:
 *         description: Tarea actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
*/
router.put('/:id', todoController.put);
router.patch('/:id', todoController.patch);

/**
 * @swagger
 * /todo/{id}:
 *   delete:
 *     summary: Eliminar una tarea existente
 *     tags: [Todo]
 *     description: Elimina una tarea existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
*/
router.delete('/:id', todoController.delete);

export default router;

