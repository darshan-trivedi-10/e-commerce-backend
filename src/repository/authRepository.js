import user from "../model/user.js";

class authRepository {
    
    async register(username, password, type) {
        try {
            const result = await user.create({username, password, type});
            return result;
        } catch (error) {
            throw error;
        }
    }

    async get(data) {
        try {
            const result = await user.findOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }


}

export default authRepository;