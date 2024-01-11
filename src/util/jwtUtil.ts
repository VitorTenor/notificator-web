import jwt from 'jsonwebtoken';
import {UserToken} from "@/constants/interface";
import {KEY} from "@/constants/localStorageKey";


export const decodeToken = (token: string) : UserToken => {
    console.log('decodeAndSaveUser');
    const decoded = jwt.decode(token, { complete: true });
    return {
        email: decoded?.payload?.userEmail,
        login: decoded?.payload?.userLogin,
        name: decoded?.payload?.userName,
        role: decoded?.payload?.userRole,
        uuid: decoded?.payload?.userUuid,
    };
}


const BASE_TYPE : BufferEncoding = 'hex';
export const saveToken = (token: string) : void => {
    if (token){
        const reverseToken : string = token.split('').reverse().join('');
        const codedToken : string = Buffer.from(reverseToken).toString(BASE_TYPE);
        localStorage.setItem(KEY.TOKEN, codedToken);
    }
}

