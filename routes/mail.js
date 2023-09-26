import { Router } from "express";
import {sendEmail} from "../controllers/mailRouter.js"

const router = Router();

router.post("/",sendEmail)
router.get("/prueba",(req,res)=>{res.status(200).json({msg:'leeyndo ...'})})
export default router;
