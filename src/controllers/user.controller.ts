import {NextFunction, Request, Response} from "express";
import { IUser } from "../types/user.types";
import {userService} from "../services/user.service";
import {ICommonResponse} from "../types/common.types";

class UserController{
    public async getAll(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<IUser[]>> {
        try {
            const users = await userService.getAll();

            return res.json(users);
        } catch (e) {
            next(e);
        }
    }
    public async getById(req:Request, res:Response, next:NextFunction):Promise<Response<IUser>>{
        try {
            const {userId} = req.params;

            const user = await userService.getById(userId);

            return res.json(user)
        }catch (e) {
            next(e)
        }
    }
    public async create(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<ICommonResponse<IUser>>> {
        try {
            const body = req.body;
            const user = userService.create(body)

            return res.status(201).json({
                message: "User created!",
                data: user,
            });
        } catch (e) {
            next(e);
        }
    }
}

export const userController = new UserController()