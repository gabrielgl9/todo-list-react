import React from "react";
import { TextfieldStyled } from "./styles";
import { v4 as uuid } from 'uuid';

const Textfield = ({type, name, value, handleChange, label = '', autocomplete = "off", styles = {} }) => {
    const uniqueId = uuid();

    return (
        <TextfieldStyled styles={styles}>
            {label && (
                <label htmlFor={uniqueId}> {label} </label>
            )}
            <input type={type} id={uniqueId} name={name} value={value} onChange={handleChange} autoComplete={autocomplete}/>
        </TextfieldStyled>
    );
}

export default Textfield;