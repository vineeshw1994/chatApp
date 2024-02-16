import  Jwt  from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute =async(req, res, next) => {
   
    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({ error: 'unauthenticated - no token provider' })
        }

        const decoded = Jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ error: 'unauthenticated - invalid token' })
        }

        const user = await User.findById(decoded.userId).select('-password')

        if(!user){
            return res.status(401).json({ error: 'unauthenticated - no user found' })
        }

        req.user = user;

        next();
     
    }catch(error){
        console.log('Error in protectRoute midleware:',error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export default protectRoute;

