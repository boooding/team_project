import {UserJwt} from "../store/models/auth";

export function isAuth (): boolean | UserJwt {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        const jwtString = JSON.parse(jwt)
        return jwtString;
    } else {
        return false;
    }
}
