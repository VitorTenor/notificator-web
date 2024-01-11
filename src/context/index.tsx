import {createContext, useState} from "react";
import {ToastProps, ToastType} from "@/components/atom/Toast";
import {useRouter} from "next/router";
import {AuthUser} from "@/constants/interface";
import decodeToken, {saveToken} from "@/util/jwtUtil";
import {KEY} from "@/constants/localStorageKey";

export type AuthContextType = {
    toastData: ToastProps;
    showToast: (toastData: ToastProps) => void;
    redirect(uri: string): void;
    user(): AuthUser;
    isLoading: boolean;
    setIsLoading(isLoading: boolean): void;
    saveUser(user: AuthUser): void;
}


export const AuthContext= createContext<AuthContextType>({
    toastData: {open: false, message: ''},
    showToast: (toastData: ToastProps) : void => {},
    redirect: (uri: string) : void => {},
    user: () : AuthUser => {
        return {
            token: '',
        }
    },
    isLoading: false,
    setIsLoading: (isLoading: boolean) : void => {},
    saveUser: (user: AuthUser) : void => {}
} as AuthContextType);


// @ts-ignore
export const AuthContextProvider = ({children}) => {
    const router : any  = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [toastData, setToastData] = useState<ToastProps>({
        open: false,
        message: '',
        type: ToastType.SUCCESS
    });

    const showToast = (toast : ToastProps) : void => {
        setToastData(toast);
    }

    const redirect = (uri: string) : void => {
        router.push(uri);
    }

    const saveUser = (user: AuthUser) : void => {
        saveToken(user.token);
    }

    const user = () : AuthUser => {
        const token : string = localStorage.getItem(KEY.TOKEN) ;
        if (token !== '') {
            return {
                token: token,
            }
        }
    }

    return (
        <AuthContext.Provider value={
            {
                toastData,
                showToast,
                redirect,
                user,
                saveUser,
                setIsLoading,
                isLoading
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}
