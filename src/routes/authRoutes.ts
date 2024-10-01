import { Router } from "express";
import { loginUser } from "../controllers/authController";

const router = Router();

// Define the route for login
router.post('/login', loginUser);

export default router;
