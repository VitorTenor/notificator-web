import {ReactElement} from "react";
import MainPage from "@/components/organism/Main";
import PrivateRoute from "@/config/router";

const Main = () : ReactElement => {
    return (
        <PrivateRoute>
            {MainPage()}
        </PrivateRoute>
    );
}

export default Main;
