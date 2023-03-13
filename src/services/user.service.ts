import {IUser, IUserUpdate} from "../types";
import {User} from "../models";
import {ApiError} from "../errors/api.error";

class UserService {
    public async getAll():Promise<IUser[]> {
        try {
            return User.find();
        }catch (e) {
            throw new ApiError(e.message, e.status)
        }
    }
    public async getById(id: string):Promise<IUser> {
        try {
            return User.findById(id)
        }catch (e) {
            throw new ApiError(e.message,e.status)
        }
    }
    public async create(body: IUser):Promise<void>{
        try {
           await User.create(body)
        }catch (e) {
            throw new ApiError(e.message, e.status)
        }
    }
    public async update(userId: string, user: IUserUpdate):Promise<void>{
        try {
            await User.updateOne({ _id: userId }, { ...user })
        }catch (e) {
            throw new ApiError(e.message, e.status)
        }
    }
    public async delete(id: string):Promise<void>{
        try {
            await User.deleteOne({ _id: id })
        }catch (e) {
            throw new ApiError(e.message, e.status)
        }
    }
}

export const userService = new UserService();