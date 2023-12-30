import { Request , Response , NextFunction } from "express";
import { AuthPayload } from "../dto/Auth.dto";
import { validate_signature } from "../utility";

//enable user inside the user interface
declare global{
    namespace Express{
        interface Request{
            user?:AuthPayload  // user is a type of AuthPayload
        }
    }
}

// Explanation:

// import { AuthPayload } from "../dto/Auth.dto";: This line imports the AuthPayload type from the "Auth.dto" file.

// declare global { ... }: This is a TypeScript declaration that extends the global scope to include 
// new types or interfaces. In this case, it extends the Express namespace.

// namespace Express { ... }: This creates or extends the Express namespace, which is provided by the express library.

// interface Request { ... }: This extends the Request interface within the Express namespace.

// user?: AuthPayload;: It adds an optional user property to the Request object with the type of AuthPayload.
// This is likely intended to store information about the authenticated user.

export const Authenticate = async (req:Request,res:Response,next:NextFunction) =>{
    console.log("--- Inside Authenticate Middleware ---")
    const validate = await validate_signature(req);
    if(validate)
    {
        console.log('Authenticated Yes yay !!!!!!!!!!!!')
        next();
    }
    else 
    {
        console.log('Authenticated No')
        res.json({"message":"User not authorized (Authenticate)"})
    }
}