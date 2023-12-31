import express, { Request, Response, NextFunction } from "express";
import { EditVandorInputs, VandorLoginInputs } from "../dto";
import { FindVandor } from "./AdminController";
import { generate_signature, validate_password } from "../utility";
import { CreateFoodInputs } from "../dto/Food.dto";
import { Food } from "../models";
// vandor login
export const VandorLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("--Inside Vandor Login--");
  const { email, password } = <VandorLoginInputs>req.body;
  const existingVandor = await FindVandor("", email);
  if (existingVandor !== null) {
    //if not null then perform validation
    const validation = await validate_password(
      password,
      existingVandor.password,
      existingVandor.salt
    );
    if (validation) {
      console.log("You Are Validated!");
      const signature = await generate_signature({
        _id: existingVandor.id,
        email: existingVandor.email,
        foodTypes: existingVandor.foodType,
        name: existingVandor.name,
      });
      console.log(signature);
      return res.json(signature);
    } else {
      return res.json({ message: "Password not valid" });
    }
  }
  return res.json({ message: "Login credentials not valid" });
};
// get vandor profile
// we can only acess these if vandor is logged in
export const GetVandorProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("---Inside Get Vandor Profile ---");
  const user = req.user;
  console.log("Hello I am User : ", user);
  console.log("__________________________________");

  if (user) {
    const existingVandor = await FindVandor(user._id);
    return res.json(existingVandor);
  }

  return res.json({ message: "Vandor information not found" });
};
// update vandor profile
export const UpdateVandorProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("---Inside Update Profile ---");
  const { foodTypes, name, phone, address } = <EditVandorInputs>req.body;
  const user = req.user;
  console.log("Hey I want to Update profile : ", user);
  if (user) {
    const existingVandor = await FindVandor(user._id);
    console.log(existingVandor);
    if (existingVandor !== null) {
      existingVandor.name = name;
      existingVandor.phone = phone;
      existingVandor.foodType = foodTypes;
      existingVandor.address = address;

      const savedResult = await existingVandor.save();
      return res.json(savedResult);
    }
    return res.json(existingVandor);
  }
  return res.json({ message: "Vandor information not found" });
};
// update vandor service
export const UpdateVandorService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // dissabling or enabling serviceAvailable attribute
  console.log("---Inside Update Vandor Service ---");
  const user = req.user;
  if (user) {
    const existingVandor = await FindVandor(user._id);
    console.log(existingVandor);
    if (existingVandor !== null) {
      existingVandor.serviceAvailable = !existingVandor.serviceAvailable;
      const savedResult = await existingVandor.save();
      return res.json(savedResult);
    }
    return res.json(existingVandor);
  }
  return res.json({ message: "Vandor information not found" });
};
// adding food
export const AddFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("---Inside Add Food ---");
  const user = req.user;
  if (user) {
    const { name, description, category, foodType, readyTime, price } = <CreateFoodInputs>req.body;
    //first find the vandor
    const vandor = await FindVandor(user._id);
    console.log('Found Vandor : ' ,vandor);
    if (vandor !== null) {
      const createdFood = await Food.create({
        vandorId: vandor._id,
        name: name,
        description: description,
        category: category,
        foodType: foodType,
        readyTime: readyTime,
        price: price,
        images: ["1.png", "2.png", "3.png"],
        rating: 0,
      });
      vandor.foods.push(createdFood);
      const result = await vandor.save();
      return res.json(result);
    }
  }

  return res.json({ message: "Not able to add food" });
};
// get all foods
export const GetFoods = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("---Inside Get all Foods ---");
  const user = req.user;
  if (user) {
    const foods = await Food.find({vandorId:user._id})
    if(foods!==null) return res.json(foods);
  }

  return res.json({ message: "Food info not found" });
};
