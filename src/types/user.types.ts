export enum EGenders {
    male = "male",
    female = "female",
    mixed = "mixed",
}

export interface IUser {
    name: string;
    email: string;
    password: string;
    gender: string;
}

export interface IUserUpdate {
    name: string;
    gender: string;
}