import { StatusCodes } from "http-status-codes";
import buyerService from "../services/buyerSevice.js";

const buyer = new buyerService();

class BuyerController {
  async listOfSellers(req, res) {
    try {
      const response = await buyer.listOfSellers();
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

  async sellerItem(req, res) {
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

  async createOrder(req, res) {
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

export default BuyerController;
