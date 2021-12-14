import {UserInformation} from "../models/userInformation";
import {
    GET_USER_INFORMATION,
    GET_USER_INFORMATION_SUCCESS,
    UserInformationUnionType
} from "../actions/userInformation.actions";

export interface UserInformationState {
    userInformation: {
        loaded: boolean
        success: boolean
        result: UserInformation
    }
}
let userInformationInitialState: UserInformation = {
    username: "",
    avatar_url: "",
    introduction: "The blogger is to lazy to introduce itself"
}
const initialState: UserInformationState = {
    userInformation: {
        loaded: false,
        success: false,
        result: userInformationInitialState
    }
}

export default function userInformationReducer(
    state = initialState,
    action: UserInformationUnionType
) {
    switch (action.type) {
        case GET_USER_INFORMATION:
            return {
                ...state,
                userInformation: {
                    loaded: false,
                    success: false,
                    result: userInformationInitialState
                }
            }
        case GET_USER_INFORMATION_SUCCESS:
            return {
                ...state,
                userInformation: {
                    loaded: true,
                    success: true,
                    result: action.payload
                }
            }
        default:
            return state
    }
}
