import Cookies from 'js-cookie';

export const getCookies = (key : string) : any => {
    return Cookies.get(key);
}

export const setCookies = (key : string, value : string) : void => {
    Cookies.set(key, value);
}

