import { useRouter } from 'next/router';
import {useContext, useEffect} from 'react';
import {AuthContext, AuthContextType} from "@/context";
import {User} from "@/constants/interface";

const PrivateRoute = ({ children }) => {
    const context : AuthContextType = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        const user : () => User = context.user;
        console.log(context.user)
        console.log("context.user")
        if (user()?.token === null || user()?.token === undefined || user()?.token === '') {
            console.log("context.user2")
            context.redirect('/login');
        }
    }, [context, router]);

    return context.user ? children : null;
};

export default PrivateRoute;
