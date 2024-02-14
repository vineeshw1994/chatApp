import  Jwt  from "jsonwebtoken";
const generateToken = (userId,res) =>{
    //openssl rand -base64 32 'on the bash'
    const token = Jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'15d'})

    res.cookie('jwt',token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, //prevent xss attacks cross site scripting attacks 
        sameSite: "strict" ,// csrf attacks crss -site request forgery attacks
        secure: process.env.NODE_ENV !== "development" //only works in production mode
    })
}

export default generateToken;