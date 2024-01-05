import {ReactElement} from "react";
import {Input} from "@/components/atom/Input";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import {LinkSample} from "../../atom/Link";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface LoginFormProps {
    submit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm = (props: LoginFormProps): ReactElement => {

    return (
        <Box component="form" noValidate onSubmit={props.submit} sx={{mt: 1}}>
            <Input
                id={'email'}
                name={'email'}
                label={'Email Address'}
                autoComplete={'email'}
                autoFocus={true}
                margin={'normal'}
                fullWidth={true}
                required={true}
            />
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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <LinkSample
                        href={'/register'}
                        text={'Don\'t have an account? Sign Up'}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
