import catalog from "../model/catalog.js";

class sellerRepository {
    
    async createCatalog(userId, catelogData) {
        try {
            const result = await catalog.create({
                userId : userId,
                catelog : catelogData
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default sellerRepository;