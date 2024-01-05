import {ReactElement} from "react";
import Grid from "@mui/material/Grid";
import * as React from "react";

interface ImageTemplateProps {
    backgroundImg: string
    backgroundRepeat: string
    backgroundSize: string
    backgroundPosition: string
}

export const ImageTemplate = (props: ImageTemplateProps): ReactElement => {
    return (
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: `url(${props.backgroundImg})`,
                backgroundRepeat: `${props.backgroundRepeat}`,
                backgroundSize: `${props.backgroundSize}`,
                backgroundPosition: `${props.backgroundPosition}`,
            }}
        />
    )
}
