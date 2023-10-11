import {Request, Response } from "express";
import bcrypt from 'bcrypt';
import User from "../models/user.model";
import jwt from "jsonwebtoken";
import {IUser} from "../types"
import { Types } from "mongoose";


const getUserToken = (_id: string | Types.ObjectId) => {
    const authenticatedUserToken = jwt.sign({ _id }, "express", {
      expiresIn: "7d",
    });
    return authenticatedUserToken;
  };


export const createUser = async (request: Request, response: Response) => {
    try{
        const { name, email, password} = request.body
        
        const existingUser = await User.findOne({email})

        if (existingUser){
            return response.status(409).send("User Alerady Exists")
        }

        const hashedPassword = await bcrypt.hash(password,12)
        
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        })

        return response.status(201).send({message:"User Created Successfully"})

    } catch(error){
        console.log("Cannot create user", error)
        throw error
    }
    
};

export const loginUser = async (request: Request, response: Response) =>{
    try {
        const{email,password}:IUser = request.body 
        const existingUser = await User.findOne({email})

        if(!existingUser){
            return response.status(409).send({message:"User dosen't exist"})
        }

        const isPasswordMatched = await bcrypt.compare(password,existingUser.password)

        if(isPasswordMatched){
            const token = getUserToken((existingUser)._id)
            return response.send({
                token,
                user:{
                    email:existingUser.email,
                    name: existingUser.name,
                },
            })
        }else{
            return response.status(400).send({message:"Incorrect Password"})
        }

    } catch (error) {
        console.log ("Cannot login user", error)
        throw error
    }
};