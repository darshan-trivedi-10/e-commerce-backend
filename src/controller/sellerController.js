import { StatusCodes } from "http-status-codes";
import sellerService from "../services/sellerService.js";

const seller = new sellerService();
class SellerController {
  async createCatalog(req, res) {
    try {
      const userdata = req.user_info;
      if (userdata.type != 1) {
        return res.status(400).json({
          success: false,
          message: "You must be a seller to create a catalog.",
        });
      }

      console.log(userdata.id, req.body.catalog);

      const response = await seller.createCatalog(
        userdata.id,
        req.body.catalog
      );
      return res.status(StatusCodes.OK).json({
        message: "Created Catalog Succesfully",
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

  async orders(req, res) {
    try {
      const response = await seller.orders(req.user_info.id);
      return res.status(StatusCodes.OK).json({
        message: "All Your Order Fetched Succesfully",
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

export default SellerController;
