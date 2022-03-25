import styled from "styled-components";

export const ButtonStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    height: ${props => props.styles.height || "auto"};
    width: ${props => props.styles.width || "auto"};
    
    button {
        width: 100%;
        background: #008080;
        color: #fff;
        border: 1px solid;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
    }

    button:disabled {
        background: #4c6c6c;
        border-color: #e7e2e2;
        cursor: not-allowed;
    }
`;