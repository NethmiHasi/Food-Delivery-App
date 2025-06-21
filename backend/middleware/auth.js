import jwt from "jsonwebtoken";

const authMiddleware = async(req, res, next) =>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false, message:"Not Authorized Login Again"});
    }
    try {
        const tokrn_decode = jwt.verify(token, process.env.JWt_SECRET);
        req.body.userId = tokrn_decode.id;
        next();
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
        
    }

}

export default authMiddleware;