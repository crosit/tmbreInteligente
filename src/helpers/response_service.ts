import { ResponseServiceI } from "src/models/response_servie.model";

const ResponseService = (
  success: boolean,
  statusCode: number,
  data: any,
  message: string
): ResponseServiceI => {
  return { success, statusCode, data, message };
};
export { ResponseService };
