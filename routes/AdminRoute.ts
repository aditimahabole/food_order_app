import express , {Request , Response , NextFunction} from 'express';
import { CreateVandor, GetVandor ,GetVandorbyID} from '../controllers';

const router = express.Router();
// admin will create vandor 
router.post('/vandor',CreateVandor)
router.get('/vandors',GetVandor )
router.get('/vandor/:id',GetVandorbyID)



router.get('/',( req : Request , res : Response, next : NextFunction)=>{
    console.log("--Inside AdminRoute.js--")
    res.json({
        message:"Inside AdminROute"
    })
})
export {router as AdminRoute}