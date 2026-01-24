import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genToken } from "../utils/authToken.js";

export const UserRegister = async (req, res, next) => {
  try {
    console.log(req.body);

    // accept data from Frontend
    const { fullName, email, mobileNumber, password, role, } = req.body;

    // verified
    if (!fullName || !email || !mobileNumber || !password || !role) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    console.log( fullName,email,);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already registered");
      error.statusCode = 409;
      return next(error);
    }

    console.log("sending data db");

    //encrypt the password

    const salt = await bcrypt.genSalt(10);                     //type 2
    const hashPassword = await bcrypt.hash(password,salt);
    // const hashPassword = await bcrypt.hash(password, 10);

    console.log("ps hashing done =", hashPassword);

    //  save data to batabase

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });

    // send response to Frontend

    console.log(newUser);
    res.status(201).json({ message: "Registration Successfully" });

    // End
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const {  email, password } = req.body;

    console.log({email,password});
    
    // verified
    if (!email || !password) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    // check if user is register or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

    // verify the password

    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Password didn`t macth");
      error.statusCode = 401;
      return next(error);
    }



    // token Genration will be done here

   genToken(existingUser,res);





    // send message to Frontend

    // console.log(existingUser);
    res.status(200).json({ message: "Login Successfully", data: existingUser });

    // End
  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    next(error);
  }
};
