import * as React from "react";
import {ReactElement} from "react";
import TextField from "@mui/material/TextField";

interface InputProps {
    id : string;
    name : string;
    label : string;
    autoComplete : string;
    autoFocus? : boolean;
    margin : "dense" | "normal" | "none";
    required? : boolean;
    fullWidth? : boolean;
    type? : string;

}

export const Input = (props : InputProps) : ReactElement => {
    return (
        <TextField
            margin={props.margin}
            required={props.required}
            fullWidth={props.fullWidth}
            id={props.id}
            label={props.label}
            name={props.name}
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            type={props.type}
        />
    )
}
