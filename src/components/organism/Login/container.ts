import {FormEvent, useContext} from "react";
import {post} from "@/service/api";
import {AUTHENTICATION} from "@/constants/apiUri";
import {AuthContext, AuthContextType} from "@/context";

export interface UseLoginContainer {
    states: {};
    functions: {
        handleSubmit: (event : FormEvent<HTMLFormElement>) => void;
    };
}


export interface LoginForm {
    login: string;
    password: string;
}

export const useContainer = () : UseLoginContainer => {
    const context : AuthContextType = useContext(AuthContext);
    const handleSubmit = (event : FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        const data : any = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        const dataForm : LoginForm = {
            login: data.get('email') as string,
            password: data.get('password') as string,
        }

        post(`${AUTHENTICATION.LOGIN}`, dataForm)
            .then((response) : void => {
                console.log(response);
                context.saveUser({
                    token: response.token,
                });
        });

    }

    return {
        states: {},
        functions: {
            handleSubmit,
        }
    }
}
