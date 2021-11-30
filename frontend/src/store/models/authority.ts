export interface UserInformation {
     _id: string,
    username: string
}

export interface UserJwt {
    token: string,
    user: UserInformation
}