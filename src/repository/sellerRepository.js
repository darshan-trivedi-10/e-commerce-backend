import catalog from "../model/catalog.js";
import order from "../model/order.js";

class sellerRepository {
  async createCatalog(userId, catelogData) {
    try {
      for (const item of catelogData) {
        const result = await catalog.create({
          userId: userId,
          name: item.name,
          price: item.price,
        });
      }
      return true;
    } catch (error) {
      throw error;
    }
  }

  async orders(sellerId) {
    try {
      const result = await order.find({
        sellerId: sellerId,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default sellerRepository;
