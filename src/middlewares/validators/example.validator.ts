import {
  body,
  validationResult,
  ValidationChain,
  Result,
  ValidationError,
} from "express-validator";

import { Request, Response, NextFunction } from "express";
const userValidationRules = (method: string) => {
  const POST_VALIDATOR: ValidationChain[] = [
    body("example").isLength({ min: 5 }),
  ];
  const DELETE_VALIDATOR: ValidationChain[] = [];
  const PUT_VALIDATOR: ValidationChain[] = [];
  const GET_VALIDATOR: ValidationChain[] = [];

  switch (method) {
    case "POST":
      return POST_VALIDATOR;
    case "GET":
      return GET_VALIDATOR;
    case "DELETE":
      return DELETE_VALIDATOR;
    case "PUT":
      return PUT_VALIDATOR;

    default:
      return [];
  }
};

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors: Result<ValidationError> = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: any = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    success: false,
    data: {
      errors: extractedErrors,
    },
    message: "Validation errors",
  });
};

export { userValidationRules, validate };
