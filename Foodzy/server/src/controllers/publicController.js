import Contact  from "../models/contactModels.js";

export const NewContact = async (req,resizeBy, next) =>{
    try {

        const {fullName,email,mobiNumber, message} = req.body;

        if(!fullName || !email || !mobiNumber || !message){
            const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
        }

        const newContact = await Contact.create({
            fullName,
            email,
            mobiNumber,
            message,
        });

        console.log(newContact);

        res.status(201).json({ message: "Thanks For contacting us We will get Back to you in 24-48 Hours" });
        


        
    } catch (error) {
        next(error)
    }
};