import { useRouter } from 'next/router';
import {useContext, useEffect} from 'react';
import {AuthContext, AuthContextType} from "@/context";
import {AuthUser} from "@/constants/interface";

const PrivateRoute = ({ children }) => {
    const context : AuthContextType = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        const user : () => AuthUser = context.user;
        if (user()?.token === null || user()?.token === undefined || user()?.token === '') {
            context.redirect('/login');
        }
    }, [context, router]);

    return context.user ? children : null;
};

export default PrivateRoute;
