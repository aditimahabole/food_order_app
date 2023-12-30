import * as bcrypt from 'bcrypt';
import { Request } from 'express';
import jwt from 'jsonwebtoken'
import { VandorPayload } from '../dto';
import { APP_SECRET } from '../config';
import { AuthPayload } from '../dto/Auth.dto';
export const generate_salt = async()=>{
    console.log('Generating salt...')
    return await bcrypt.genSalt()
}
// generating salt then hashing it 
export const generate_password = async(password:string,salt:string)=>{
    console.log('Hashing password...')
    return await bcrypt.hash(password,salt)
}

export const validate_password = async (enteredPassword:string,savedPassword:string,salt:string) => {
    return await generate_password(enteredPassword,salt) === savedPassword;
    
}
export const generate_signature = async (payload:VandorPayload)=>{ //generate a JSON Web Token (JWT) based on the provided payload
    //The signature verification process involves the use of a secret key that only the server knows
    const signature = jwt.sign(payload,APP_SECRET,{expiresIn:'1d'})
    return signature;
}
// getting signature from request and then checking if its valid or not
export const validate_signature = async (req:Request)=>{ 
    // validate signature at every request
    console.log('--Validating Signature--')
    console.log(req.body)
    const signature = req.get('Authorization');
    // This is a method used to retrieve the value of the 'Authorization' header from the HTTP request.
    // In the context of web development and APIs, the 'Authorization' header is often used to send 
    // authentication information, such as a token.
    console.log(" My Signature =  ",signature)
    if(signature)
    {
        const payload = await jwt.verify(signature.split(' ')[1],APP_SECRET) as AuthPayload;
        // injecting payload in user request 
        // for this we are making a Middleware
        // middleware is function which runs right before handling our request
        req.user = payload;
        return true;
    }
    return false;
}