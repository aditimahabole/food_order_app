import express , {Request , Response , NextFunction} from 'express';
import { CreateVandor, GetVandor ,GetVandorbyID} from '../controllers';

const router = express.Router();
// admin will create vandor 
router.post('/vandor',CreateVandor)
router.post('/vandors',GetVandor )
router.post('/vandor/:id',GetVandorbyID)

router.get('/',( req : Request , res : Response, next : NextFunction)=>{
    res.json({
        message:"Inside AdminROute"
    })
})
export {router as AdminRoute}