import React from "react";
import { ContainerStyled } from "./styles";

const Container = ({fluid = false, wrapper = 'default', children}) => {

    return (
        <ContainerStyled fluid className={wrapper}>
            {children}
        </ContainerStyled>
    )
}

export default Container;