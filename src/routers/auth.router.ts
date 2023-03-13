import {Router} from "express";
import {userMiddleware} from "../middlewares/user.middleware";
import {authController} from "../controllers";

const router = Router();

router.get("/register", userMiddleware.isValidCreate, userMiddleware.getDynamicallyAndThrow("email"), authController.register)

router.post("/login", userMiddleware.isValidLogin, userMiddleware.getDynamicallyOrThrow("email"), authController.login);


export const authRouter = router;