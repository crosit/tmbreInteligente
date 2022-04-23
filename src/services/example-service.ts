import { ResponseServiceI } from "src/models/response_servie.model";
import { ResponseService } from "../helpers/response_service";

const exampleService_1 = async (payload: any): Promise<ResponseServiceI> => {
  try {
    // THE MAIN LOGIC HERE
    return ResponseService(true, 200, payload, "OK");
  } catch (error) {
    return ResponseService(false, 500, null, "Problema en el servidor");
  }
};

const exampleService_2 = async (payload: any): Promise<ResponseServiceI> => {
  try {
    // THE MAIN LOGIC HERE
    return ResponseService(true, 200, payload, "OK");
  } catch (error) {
    return ResponseService(false, 500, null, "Problema en el servidor");
  }
};

export { exampleService_1, exampleService_2 };
