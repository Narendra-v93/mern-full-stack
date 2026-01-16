import mongoose from "mongoose";

const ContactShecma = mongoose.Schema({

    fullName : {
        type: String,
        required:true,
    },

      email : {
        type: String,
        required:true,
    },

      mobileNumber : {
        type: String,
        required:true,
    },

      message : {
        type: String,
        required:true,
    }


},
{timestamps:true}

)

const Contact = mongoose.model("Contac",ContactShecma);

export default Contact;