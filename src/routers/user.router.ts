import {Router} from "express";
import {userController} from "../controllers";
import {userMiddleware} from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.getAll);

router.post("/", userMiddleware.isValidCreate, userController.create);

router.get("/:userId", userMiddleware.isUserIdValid, userMiddleware.getByIdOrThrow, userController.getById);

router.put("/:userId",userMiddleware.isUserIdValid, userMiddleware.isValidUpdate, userController.update);

router.delete("/:userId", userMiddleware.isUserIdValid, userController.delete)

export const userRouter = router;