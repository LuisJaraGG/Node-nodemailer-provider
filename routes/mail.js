import { Router } from "express";
import {sendEmail} from "../controllers/mailRouter.js"

const router = Router();

router.post("/",sendEmail)
export default router;
