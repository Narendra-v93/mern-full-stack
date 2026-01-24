import User from "../models/userModel.js";

export const UserUpdate = async (req, resizeBy, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All Field Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("OldData",currentUser);

    // currentUser.fullName = fullName;
    // currentUser.email = email;
    // currentUser.mobilNumber = mobilNumber;
    // await currentUser.save();

     const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        email,
        mobileNumber,
      },
      { new: true },
    );
    console.log("Updated User:", updatedUser);
    res.status(200).json({ message: "Profile Updated Successfully", data: updatedUser });
    console.log("Updating The User");
  } catch (error) {
    next(error);
  }
};
