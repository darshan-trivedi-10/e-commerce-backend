import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes';

const secret = "NEW_SCREATE_KEY10";
const tokenValidation = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            res.status(StatusCodes.FORBIDDEN).send('access denied');
        }
        if (token) {
            const decoded = jwt.verify(token, secret);
            req.user_info = decoded;
            console.log(decoded);
        }
        next();
    } catch (error) {
        res.status(StatusCodes.FORBIDDEN).send('access denied');
    }
}

export default tokenValidation;