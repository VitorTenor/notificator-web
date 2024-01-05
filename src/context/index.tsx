import {Context, createContext} from "react";

export interface AuthContextType {
}


export const AuthContext: Context<AuthContextType> = createContext<AuthContextType>({
});


// @ts-ignore
export const AuthContextProvider = ({children}) => {

    return (
        <AuthContext.Provider value={
            {
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}
