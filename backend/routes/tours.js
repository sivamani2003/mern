import express from 'express';
import { createTour } from '../controllers/tourController.js';
const router = express.Router();
router.post('/',createTour);
router.get('/',()=>{
    console.log("Test");
    return res.status(200);
});
export default router;