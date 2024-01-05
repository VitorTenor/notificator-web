import * as React from "react";
import {ReactElement} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {ImageTemplate} from "@/components/molecule/ImageTemplate";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { LoginForm } from "@/components/molecule/LoginForm";
import {useContainer, UseLoginContainer} from "@/components/view/Login/container";
import {FormStyle} from "@/components/view/Login/styles";

export const LoginPage = () : ReactElement => {
    const { functions } : UseLoginContainer = useContainer();

    return (
        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline />
            <ImageTemplate
                backgroundImg={'https://source.unsplash.com/random?wallpapers'}
                backgroundRepeat={'no-repeat'}
                backgroundSize={'cover'}
                backgroundPosition={'center'}
            />
            <FormStyle item xs={12} sm={8} md={5} >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <LoginForm submit={functions.handleSubmit}/>
                </Box>
            </FormStyle>
        </Grid>
    )
}
