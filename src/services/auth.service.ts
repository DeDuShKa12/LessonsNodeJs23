import {IUser} from "../types";
import {ApiError} from "../errors/api.error";
import {passwordService} from "./password.service";
import {User} from "../models";
import {ICredentials} from "../types";
import {ITokenPair} from "../types";
import {tokenService} from "./token.service";
import {Token} from "../models";

class AuthService {
    public async register (body:IUser) {
        try {
            const {password} = body;
            const hashedPassword = await passwordService.hash(password);
            await User.create({...body, password: hashedPassword});
        }catch (e) {
            throw new ApiError(e.message, e.status);
        }
    }
    public async login (credentials: ICredentials, user: IUser):Promise<ITokenPair> {
        try {
            const isMatched = await passwordService.compare(credentials.password, user.password);

            if (!isMatched) {
                throw new ApiError("Invalid email or password", 400);
            }

            const tokenPair = tokenService.generateTokenPair({id: user._id, name: user.name});

            await Token.create({
                _user_id: user._id,
                ...tokenPair,
            })

            return tokenPair
        }catch (e) {
            throw new ApiError(e.message, e.status);
        }
    }
}

export const authService = new AuthService();