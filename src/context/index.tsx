import {createContext, useState} from "react";
import {ToastProps, ToastType} from "@/components/atom/Toast";
import {useRouter} from "next/router";
import {User} from "@/constants/interface";

export type AuthContextType = {
    toastData: ToastProps;
    showToast: (toastData: ToastProps) => void;
    redirect(uri: string): void;
    user(): User;
    isLoading: boolean;
    setIsLoading(isLoading: boolean): void;
    saveUser(user: User): void;
}


export const AuthContext= createContext<AuthContextType>({
    toastData: {open: false, message: ''},
    showToast: (toastData: ToastProps) : void => {},
    redirect: (uri: string) : void => {},
    user: () : User => {
        return {
            token: '',
        }
    },
    isLoading: false,
    setIsLoading: (isLoading: boolean) : void => {},
    saveUser: (user: User) : void => {}
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

    const saveUser = (user: User) : void => {
        localStorage.setItem('user', JSON.stringify(user));
    }

    const user = () : User => {
        const user : string = localStorage.getItem('user') ;
        console.log(user)
        console.log("user")
        if (user !== '') {
            return JSON.parse(user);
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
