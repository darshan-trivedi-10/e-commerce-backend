import catalog from "../model/catalog.js";
import user from "../model/user.js"; // Assuming your model is named "User" with a capital "U"

class BuyerRepository {
  async listOfAllSellers() {
    try {
      const result = await user.find({ type: "1" }, "username _id");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async sellerItem(id){
    try {
        const result = await catalog.findOne(({
            userId : id
        }));
        return result;
    } catch (error) {
        throw error;
    }
  }


}

export default BuyerRepository;
