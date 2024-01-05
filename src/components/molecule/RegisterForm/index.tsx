import * as React from "react";
import {ReactElement} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {Input} from "@/components/atom/Input";
import Typography from "@mui/material/Typography";
import {LinkSample} from "@/components/atom/Link";

interface RegisterFormProps {
    submit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const RegisterForm = (props: RegisterFormProps): ReactElement => {
    return (
        <Box component="form" noValidate onSubmit={props.submit} sx={{mt: 3}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Input
                        id={'firstName'}
                        name={'firstName'}
                        label={'First Name'}
                        autoComplete={'given-name'}
                        autoFocus={true}
                        fullWidth={true}
                        required={true}
                        margin={'normal'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        id={'lastName'}
                        name={'lastName'}
                        label={'Last Name'}
                        autoComplete={'family-name'}
                        fullWidth={true}
                        required={true}
                        margin={'normal'}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        id={'email'}
                        name={'email'}
                        label={'Email Address'}
                        autoComplete={'email'}
                        margin={'normal'}
                        fullWidth={true}
                        required={true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        id={'password'}
                        name={'password'}
                        label={'Password'}
                        margin={'normal'}
                        fullWidth={true}
                        required={true}
                        type={'password'}
                        autoComplete={'current-password'}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <LinkSample
                        href={'/login'}
                        text={'Already have an account? Sign in'}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
