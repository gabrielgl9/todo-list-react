import React from "react";
import { CardStyled } from "./styles";

const Card = ({size, children}) => {

    return (
        <CardStyled className={size}>
            {children}
        </CardStyled>
    )
}

export default Card;