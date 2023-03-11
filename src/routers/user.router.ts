import {Router} from "express";
import {userController} from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getAll);

router.get("/:userId", userController.getById);

router.get("/", userController.create);

export const userRouter = router;