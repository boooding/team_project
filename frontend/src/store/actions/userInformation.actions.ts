import {UserInformation} from "../models/userInformation";

export const GET_USER_INFORMATION = "GET_USER_INFORMATION";
export const GET_USER_INFORMATION_SUCCESS = "GET_USER_INFORMATION_SUCCESS";

export interface GetUserInformationAction {
    type: typeof GET_USER_INFORMATION,
    id: string
}

export interface GetUserInformationSuccessAction {
    type: typeof GET_USER_INFORMATION_SUCCESS,
    payload: UserInformation
}

export const getUserInformation = (id: string): GetUserInformationAction => ({
    type: GET_USER_INFORMATION,
    id: id
})

export const getUserInformationSuccess = (
    payload: UserInformation
): GetUserInformationSuccessAction => ({
    type: GET_USER_INFORMATION_SUCCESS,
    payload
})

export type UserInformationUnionType =
    GetUserInformationAction |
    GetUserInformationSuccessAction
