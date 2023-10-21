import { StatusCodes } from "http-status-codes";
import authService from "../services/authService.js";
import user from "../model/user.js";

const auth = new authService();

class AuthController {
  async register(req, res) {
    /*
    req : username, password, type of user (buyer/seller)
    res : success message
    */
    try {
      const { username, password, type } = req.body;
      if (!username || !password || !type || (type != 1 && type != 2)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Bad Request",
          success: false,
          err: "Client Error",
          data: [],
        });
      }

      const response = await auth.register(username, password, type);
      return res.status(StatusCodes.OK).json({
        message: "User Register Succesfully",
        data: true,
        success: true,
        err: {},
      });
    } catch (error) {
      return res
        .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          message: error.message,
          data: {},
          success: false,
          err: error,
        });
    }
  }

  async login(req, res) {
    /*
    req : username, password
    res : success message + authentication token
    */
    try {
      const { username, password } = req.body;
      const response = await auth.login(username, password);
      return res.status(StatusCodes.OK).json({
        message: "SUCCESS",
        data: response,
        success: true,
        err: {},
      });
    } catch (error) {
      return res
        .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          message: error.message,
          data: {},
          success: false,
          err: error,
        });
    }
  }
}

export default AuthController;
