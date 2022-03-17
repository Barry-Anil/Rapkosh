import express from "express";
import WordController from "../controllers/wordController.js";

const router = express.Router();

router.get('/words', WordController.getAllDoc)

export default router;