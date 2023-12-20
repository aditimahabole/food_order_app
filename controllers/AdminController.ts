import { Request, Response, NextFunction } from "express";
import { CreateVandorInput } from "../dto";
import { Vandor } from "../models";
import { generate_password, generate_salt } from "../utility";

export const CreateVandor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    address,
    pincode,
    foodType,
    phone,
    email,
    password,
    owner_name,
  } = <CreateVandorInput>req.body;

  console.log("Inside Create Vanddor in AdminContol.ts");
  console.log("______________________________");
  console.log("name : ", name);
  console.log("email : ", email);
  console.log("______________________________");

  // checking if vandor already exists using email
  const existingVandor = await Vandor.findOne({ email: email });

  if (existingVandor !== null) {
    return res.json({
      message: "Vandor already exists",
    });
  }
  // generating a salt
  const salt = await generate_salt();
  const vandorPassword = await generate_password(password,salt);
  // then encrypt the password

  const createdVandor = await Vandor.create({
    name: name,
    address: address,
    pincode: pincode,
    foodType: foodType,
    salt: salt,
    phone: phone,
    email: email,
    password: vandorPassword,
    owner_name: owner_name,
    rating: 0,
    seriveAvailable: false,
    coverImages: [],
  });

  return res.json(createdVandor);
};
export const GetVandor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export const GetVandorbyID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
