import * as React from "react";
import {useContext} from "react";
import {post} from "@/service/api";
import {AuthContext, AuthContextType} from "@/context";
import {ToastType} from "@/components/atom/Toast";
import {USERS} from "@/constants/apiUri";

export interface UseRegisterContainer {
    states: {};
    functions: {
        handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    };
}

interface RegisterForm {
    email: string;
    password: string;
    username: string;
}


export const useContainer = (): UseRegisterContainer => {
    const context: AuthContextType = useContext(AuthContext);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const data: any = new FormData(event.currentTarget);

        const dataForm: RegisterForm = {
            email: data.get('email') as string,
            password: data.get('password') as string,
            username: `${data.get('firstName')} ${data.get('lastName')}`,
        }

        context.setIsLoading(true)
        post(`${USERS.REGISTER}`, dataForm)
            .then((response): void => {
                context.showToast({
                    open: true,
                    message: response,
                    type: ToastType.SUCCESS
                });
                setTimeout(() : void => {
                    context.redirect("/login")
                }, 2000)
            })
            .catch((error): void => {
                console.log(error);
                context.showToast({
                    open: true,
                    message: error.message,
                    type: ToastType.ERROR
                });
            })
            .finally(() : void => {
                context.setIsLoading(false)
            });
    };

    return {
        states: {},
        functions: {
            handleSubmit,
        }
    }
}
