import { Request, Response, NextFunction } from "express";
import { CreateVandorInput } from "../dto";
import { Vandor } from "../models";
import { generate_password, generate_salt } from "../utility";
//-------------------------------------------------------------------------------------
// for reducing code repetition
export const FindVandor = async (id: string | undefined, email?: string) => {
  console.log('Finding Vandor');
  if (email) {
    const vandor = await Vandor.findOne({ email: email });
    return vandor;
  } else {
    const vandor = await Vandor.findById(id);
    return vandor;
  }
};
//-------------------------------------------------------------------------------------
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
  const existingVandor =await FindVandor('',email);

  if (existingVandor !== null) {
    return res.json({
      message: "Vandor already exists",
    });
  }
  // generating a salt utility/PasswordUtility.js
  const salt = await generate_salt();
  // then encrypt the password
  const vandorPassword = await generate_password(password, salt);



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
    serviceAvailable: false,
    coverImages: [],
  });

  return res.json(createdVandor);
};
export const GetVandor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("--Inside GetVandor--");
  const vandors = await Vandor.find();
  if (vandors !== null) return res.json(vandors);
  return res.json({ message: "Vandors not available" });
};
export const GetVandorbyID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("--Inside GetVandorById--");
  const vandorId = req.params.id;
  const vandor = await FindVandor(vandorId);
  if (vandor !== null) {
    return res.json(vandor);
  }
  return res.json({ message: "Vandor does not exist" });
};
