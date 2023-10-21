import { StatusCodes } from "http-status-codes";

const auth = new authService();

class SellerController {
  async createCatalog(req, res) {
    try {
        const userdata = req.user_info;


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

  async orders(req, res) {
    try {
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

export default SellerController;
