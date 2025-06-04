import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    //using bcryptjs to hash the password
  if(!fullName || !email){
 return res
        .status(400)
        .json({ message: "credintials cnat be empty " });
  }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password should atleast be 6 charecters" });
    }
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "email already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });
    if (newUser) {
        generateToken(newUser._id,res)
        await newUser.save();
        res.status(201).json({
          _id:newUser._id,
          fullName:newUser.fullName,
          email:newUser.email,
          profilePic:newUser.profilePic,

        })
    } else {
      res.status(400).json({ message: "invalid user data" });
    }
  } catch (error) {
    console.log("error in signup controller",error.message);
    res.status(500).json({ message: "internal server error" });

  }
};



export const login = (req, res) => {
  res.send("working");
};


export const logout = (req, res) => {
  res.send("working");
};
