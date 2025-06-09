import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from 'validator'

//login user 
const loginUser = async(req, res) =>{

}

//register user
const registerUser = async()=>{
    const {name, password, email} = req.body;
    try {
        //checking is user already exist
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false, message:"User already exists"})
        }

        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }
        
    } catch (error) {
        
    }

}

export {loginUser, registerUser}