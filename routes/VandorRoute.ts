import express , {Request , Response , NextFunction} from 'express';
import { VandorLogin } from '../controllers';

const router = express.Router();
router.post('/login',VandorLogin)
router.get('/',( req : Request , res : Response, next : NextFunction)=>{
    console.log("--Inside VandorRoute.js--")
    res.json({
        message:"Inside Vandor Route"
    })
})
export {router as VandorRoute}