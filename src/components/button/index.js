import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({type, value, clickButton}) => {

    return (
        <ButtonStyled>
            <button type={type} onClick={clickButton}> {value} </button>
        </ButtonStyled>
    )
}

export default Button;