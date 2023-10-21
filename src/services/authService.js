import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

import authRepository from "../repository/authRepository.js";

const authRepo = new authRepository();
const SCREATEKEY = "NEW_SCREATE_KEY10"

class authService {
  async register(username, password, type) {
    try {
      const isRegisterUser = await authRepo.get({
        username: username,
      });

      // check for duplicate user
      if (isRegisterUser) {
        const error = new Error("You're Already Register User");
        error.statusCode = StatusCodes.CONFLICT;
        throw error;
      }

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const response = await authRepo.register(username, hashPassword, type);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async login(username, password) {
    try {
      const findUser = await authRepo.get({
        username: username,
      });

      if (!findUser) {
        const error = new Error("Please Register First");
        error.statusCode = StatusCodes.BAD_REQUEST;
        throw error;
      }

      const userVerification = await bcrypt.compare(
        password,
        findUser.password
      );

      if (!userVerification) {
        const error = new Error("Please Enter Correct Credentials");
        error.statusCode = StatusCodes.BAD_REQUEST;
        throw error;
      }

      const token = jwt.sign({
        username : findUser.username,
        type : findUser.type
      }, SCREATEKEY, {expiresIn : '24h'});

      return token;
    } catch (error) {
      throw error;
    }
  }
}

export default authService;