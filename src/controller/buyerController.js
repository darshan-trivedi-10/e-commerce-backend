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
      const response = await buyer.sellerItem(req.params.seller_id);
      console.log(req.params);
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

  async createOrder(req, res) {
    try {
      const { buyerId, sellerId, productId } = req.body;
      if (!buyerId || !sellerId || !productId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Bad Request",
          success: false,
          err: "Client Error",
          data: [],
        });
      }

      const isBuyer = req.user_info.type;
      if (isBuyer != 2) {
        return res.status(400).json({
          success: false,
          message: "You must be a buyer to create a order.",
        });
      }

      const response = await buyer.createOrder(buyerId, sellerId, productId);
      return res.status(StatusCodes.OK).json({
        message: "SUCCESS",
        success: true,
        data: response,
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

export default BuyerController;
