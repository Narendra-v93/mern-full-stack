import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const UserRegister = async (req, res, next)=>{
    try {

        // accept data from Frontend 
        const {fulllName,email,mobileNumber,password} = req.body;

        // verified
        if(!fulllName || !email || !mobileNumber || !password){
            const error = new Error ("All feilds required");
            error.statusCode = 400;
            return next(error);
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            const error = new Error ("Email Already registered");
            error.statusCode = 409;
            return next(error);
        }

        //encrypt the password

        // const salt = await bcrypt.genSalt(10);                     type 2
        // const hashPassword = await bcrypt.hash(password,salr);
        const hashPassword = await bcrypt.hash(password,10);

        //  save data to batabase


        const newUser = await User.create({
            fulllName,
            email, 
            mobileNumber,
            password:hashPassword,
        })

        // send response to Frontend

        console.log(newUser);
        res.status(201).json({message : "User Account created Successfully"});
        
        // End
        
    } catch (error) {
        next(error);
    }
}

export const UserLogin = async (req, res, next)=>{
    try {

         const {fulllName,email,mobileNumber,password} = req.body;

        // verified
        if( !email ||  !password){
            const error = new Error ("All feilds required");
            error.statusCode = 400;
            return next(error);
        }

        // check if user is register or not
         const existingUser = await User.findOne({email});
        if(existingUser){
            const error = new Error ("Email not registered");
            error.statusCode = 402;
            return next(error);
        }

        // verify the password 

        const isVerified = await bcrypt.compare(password,existingUser.password);
        if(!isVerified){
            const error = new Error ("Password didn`t macth");
            error.statusCode = 402;
            return next(error);

        }

        // send message to Frontend

        // console.log(existingUser);
    res.status(200).json({message : "Login Successfully",data:existingUser});
    
    // End
    } catch (error) {
        next(error)
    }
};

export const UserLogout = async (req, res, next)=>{
    try {

         res.status(200).json({message : "Logout Successfully"});
        
    } catch (error) {
        next(error)
    }
}