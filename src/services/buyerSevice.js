import BuyerRepository from "../repository/buyerRepository.js";

const buyerRepo = new BuyerRepository();

class buyerService {
  async listOfSellers() {
    try {
      const response = await buyerRepo.listOfAllSellers();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async sellerItem(id) {
    try {
      const response = await buyerRepo.sellerItem(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async createOrder(buyerId, sellerId, productId) {
    try {
      const response = await buyerRepo.createOrder(buyerId, sellerId, productId);
      return response;
    } catch (error) {
      throw error;    }
  }
}

export default buyerService;
