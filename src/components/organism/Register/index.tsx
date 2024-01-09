import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {RegisterForm} from "@/components/molecule/RegisterForm";
import {ReactElement} from "react";
import {useContainer, UseRegisterContainer} from "@/components/organism/Register/container";


const RegisterPage = () : ReactElement => {
    const { functions }  : UseRegisterContainer = useContainer()
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <RegisterForm submit={functions.handleSubmit} />
            </Box>
        </Container>
    );
}

export default RegisterPage;
