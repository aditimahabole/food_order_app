import express , {Request , Response , NextFunction} from 'express';
import { VandorLoginInputs } from '../dto';
import { FindVandor } from './AdminController';
import { validate_password } from '../utility';
export const VandorLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) =>{
    console.log('--Inside VandorLogin--')
    const {email,password} = <VandorLoginInputs>req.body
    const existingVandor = await FindVandor('',email);
    if(existingVandor!==null)
    {
        //if not null then perform validation
        const validation = await validate_password(password,existingVandor.password,existingVandor.salt);
        if(validation)
        {
            return res.json(existingVandor)
        }
        else 
        {
            return res.json({"message":"Password not valid"})
        }
    }
    return res.json({"message":"Login credentials not valid"})

  }