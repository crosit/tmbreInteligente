import { Request, Response } from "express";
import {
  exampleService_1,
  exampleService_2,
} from "../services/example-service";
import { User } from "../entities/example.entity";
import config from "../config/envs";
import { ResponseServiceI } from "src/models/response_servie.model";

const example_1 = async (req: Request, res: Response): Promise<Response> => {
  try {
    const example: ResponseServiceI = await exampleService_1({});
    return res.status(example.statusCode).send(example);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      data: null,
      message: "Something went wrong!",
    });
  }
};

const example_2 = async (req: Request, res: Response): Promise<Response> => {
  try {
    const example: ResponseServiceI = await exampleService_1({});
    return res.status(example.statusCode).send(example);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      data: null,
      message: "Something went wrong!",
    });
  }
};

export { example_1, example_2 };
