import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import {ReactElement} from "react";

export const Copyright = (props: any) : ReactElement => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
