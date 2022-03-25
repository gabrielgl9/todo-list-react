import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({type, value = '', disabled = false, clickButton = () => {}, styles = {}, children}) => {

    return (
        <ButtonStyled styles={styles}>
            <button type={type} onClick={clickButton} disabled={disabled}> {children || value} </button>
        </ButtonStyled>
    )
}

export default Button;