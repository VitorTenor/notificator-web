import React, { ReactElement, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext, AuthContextType } from '@/context';
import * as S from "@/components/molecule/Loading/styles";

const Loading = (): ReactElement => {
    const context: AuthContextType = useContext(AuthContext);

    if (!context.isLoading) {
        return <></>;
    }
    return (
        <S.LoadingStyled>
            <S.BlurStyled />
            <CircularProgress style={{ zIndex: 1000}}/>
        </S.LoadingStyled>
    );
};

export default Loading;
