import { StatusCodes } from "http-status-codes";

import sellerRepository from "../repository/sellerRepository.js";

const sellerRepo = new sellerRepository();

class sellerService {
  async createCatalog(userId, catalogData) {
    try {
      const response = await sellerRepo.createCatalog(userId, catalogData);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async orders(sellerId){
    try {
      const response = await sellerRepo.orders(sellerId);
      return response;
    } catch (error) {
      throw error;
    }
  }

}

export default sellerService;