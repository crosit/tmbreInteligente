import {
  validate,
  userValidationRules,
} from "../middlewares/validators/example.validator";
import { Application } from "express";

import { example_1, example_2 } from "../controllers/example.controller";

/**
 * @swagger
 * components:
 *  schemas:
 *    <Example>Schema:
 *      type: object
 *      properties:
 *        id:
 *          type: number;
 *        description:
 *          type: string;
 *      required:
 *        - description
 *      example:
 *        description: Lorem ipsum sdkjf
 */

/**
 * @swagger
 * tags:
 *  name: <Example>Tag
 *  description: <Example> endpoints
 */

export = (app: Application) => {
  /**
   *  @swagger
   * /example:
   *  post:
   *    summary: Store <Example>
   *    tags: [<Example>Tag]
   *    responses:
   *      200:
   *        description: Creates <Example>
   *        content:
   *          application/json:
   *            schema:
   *            $ref: '#/components/schemas/<Example>Schema'
   *
   *
   */
  app.post("/example", userValidationRules("POST"), validate, example_1);

  /**
   *  @swagger
   * /example:
   *  get:
   *    summary: List of <Example>
   *    tags: [<Example>Tag]
   *    responses:
   *      200:
   *        description: List of <Example>
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/<Example>Schema'
   *
   *
   */
  app.get("/example", userValidationRules("GET"), validate, example_2);

  /**
   *  @swagger
   * /example/{id}:
   *  put:
   *    summary: Update <Example>
   *    tags: [<Example>Tag]
   *    responses:
   *      200:
   *        description: Updates <Example>
   *        content:
   *          application/json:
   *            schema:
   *            $ref: '#/components/schemas/<Example>Schema'
   *    parameters:
   *      - in: /example/id
   *        name: id
   *        description: ID of <Example>
   *        schema:
   *          type: integer
   *          item: 1
   */
  app.put("/example/:id", userValidationRules("PUT"), validate, example_1);

  /**
   *  @swagger
   * /example/{id}:
   *  get:
   *    summary: Get one <Example>
   *    tags: [<Example>Tag]
   *    responses:
   *      200:
   *        description: Get one <Example>
   *        content:
   *          application/json:
   *            schema:
   *            $ref: '#/components/schemas/<Example>Schema'
   *    parameters:
   *      - in: /example/id
   *        name: id
   *        description: ID of <Example>
   *        schema:
   *          type: integer
   *          item: 1
   *
   *
   */
  app.get("/example/:id", userValidationRules("GET"), validate, example_1);

  /**
   *  @swagger
   * /example/{id}:
   *  delete:
   *    summary: Delete <Example>
   *    tags: [<Example>Tag]
   *    responses:
   *      200:
   *        description: Delete <Example>
   *    parameters:
   *      - in: /example/id
   *        name: id
   *        description: ID of <Example>
   *        schema:
   *          type: integer
   *          item: 1
   *         
   *
   *
   */
  app.delete("/example/:id", userValidationRules("DELETE"), validate, example_1);
};
