import Snackbar from "@mui/material/Snackbar";
import {ReactElement, ReactNode, useContext} from "react";
import {AuthContext, AuthContextType} from "@/context";
import {Alert} from "@mui/material";
import Box from "@mui/material/Box";

export interface ToastProps {
    open: boolean;
    message: string;
    type?: ToastType;
    action?: ReactNode;
    onClose?: () => void;
}

export enum ToastType {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
}

export const Toast = ()  : ReactElement => {
    const context : AuthContextType = useContext(AuthContext);

    const props : ToastProps = {
        open: context.toastData?.open ?? false,
        message: context.toastData?.message ?? '',
        type: context.toastData?.type ?? ToastType.SUCCESS,
    }

    const onClose = () : void => {
        context.showToast({open: false, message: ''});
        if (props.onClose) {
            props.onClose();
        }
    }

    return (
        <Box sx={{ width: 500 }}>
            <Snackbar
                open={props.open}
                onClose={onClose}
                autoHideDuration={6000}
                action={props.action}
                severity={props.type}
                anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
            >
                <Alert onClose={onClose} severity={props.type} sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
            </Snackbar>
        </Box>

    )
}
