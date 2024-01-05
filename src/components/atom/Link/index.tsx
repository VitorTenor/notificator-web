import {ReactElement} from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";


interface LinkSampleProps {
    href: string;
    text: string;
}

export const LinkSample = (props : LinkSampleProps) : ReactElement => {
    return (
        <Link href={props.href}>
            <Typography variant="body2">
                {props.text}
            </Typography>
        </Link>
    )
}
