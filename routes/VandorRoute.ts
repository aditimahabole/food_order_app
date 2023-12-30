import express , {Request , Response , NextFunction} from 'express';
import { GetVandorProfile, UpdateVandorProfile, UpdateVandorService, VandorLogin } from '../controllers';
import { Authenticate } from '../middlewares';

const router = express.Router();
router.post('/login',VandorLogin)
// below can be accessed 
router.use(Authenticate)
router.get('/profile', GetVandorProfile);
router.patch('/profile',UpdateVandorProfile)
router.patch('/service',UpdateVandorService)
router.get('/',( req : Request , res : Response, next : NextFunction)=>{
    console.log("--Inside VandorRoute.js--")
    res.json({
        message:"Inside Vandor Route"
    })
})
export {router as VandorRoute}