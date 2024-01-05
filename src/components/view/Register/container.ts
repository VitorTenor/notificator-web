import * as React from "react";
import {post} from "@/service/api";

export interface UseRegisterContainer {
    states: {};
    functions: {
        handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    };
}


export const useContainer = (): UseRegisterContainer => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const data: FormData = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        const dataForm = {
            email: data.get('email'),
            password: data.get('password'),
            username: data.get('firstName') + ' ' + data.get('lastName'),
        };

        post('/v1/users/register', dataForm)
            .then((response) : void => {
                console.log(response);
            })
            .catch((error) : void => {
                    console.log(error);
            });
    };

    return {
        states: {},
        functions: {
            handleSubmit,
        }
    }
}
