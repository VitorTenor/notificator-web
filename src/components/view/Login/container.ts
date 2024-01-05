import {FormEvent} from "react";

export interface UseLoginContainer {

    states: {};
    functions: {
        handleSubmit: (event : FormEvent<HTMLFormElement>) => void;
    };
}

export const useContainer = () : UseLoginContainer => {

    const handleSubmit = (event : FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        const data : FormData = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }

    return {
        states: {},
        functions: {
            handleSubmit,
        }
    }
}
