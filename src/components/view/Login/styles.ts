import Grid from "@mui/material/Grid";
import styled from "styled-components";


export const FormStyle = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        justify-content: center;
    }
`;
