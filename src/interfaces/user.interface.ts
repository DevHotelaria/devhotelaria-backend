export interface IUserRequest {
    name: string;
    type_user: string;
    password: string;
}

export interface IUserUpdate {
    name?: string;
    type_user?: string;
    password?: string;
}