import catalog from "../model/catalog.js";

class sellerRepository {
  async createCatalog(userId, catelogData) {
    try {
      console.log(catelogData);
      for (const item of catelogData) {
        const result = await catalog.create({
          userId: userId,
          name : item.name,
          price : item.price
        });
      }
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default sellerRepository;
