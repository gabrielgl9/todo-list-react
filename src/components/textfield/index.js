import React from "react";
import { TextfieldStyled } from "./styles";

const Textfield = ({type, name, value, handleChange, autocomplete = "off"}) => {

    return (
        <TextfieldStyled>
            <input type={type} name={name} value={value} onChange={handleChange} autoComplete={autocomplete}/>
        </TextfieldStyled>
    );
}

export default Textfield;