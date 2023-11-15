import {Request , Response , NextFunction} from 'express';
import { CreateVandorInput } from '../dto';
export const CreateVandor = async ( req : Request , res : Response, next : NextFunction)=>{
   const {name,address,pincode,foodType,phone,email,password,owner_name}  = <CreateVandorInput>req.body
   console.log("Inside Create Vanddor in AdminContol.ts")
   console.log(name,address,pincode,foodType,phone,email,password,owner_name);
   console.log("______________________________");
   
   return res.json({name,address,pincode,foodType,phone,email,password,owner_name});
}
export const GetVandor = async ( req : Request , res : Response, next : NextFunction)=>{
   
}
export const GetVandorbyID = async ( req : Request , res : Response, next : NextFunction)=>{
   
}