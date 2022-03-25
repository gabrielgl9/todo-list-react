import styled from "styled-components";

export const TextfieldStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    margin: 10px 0;
    height: ${props => props.styles.height || "auto"};
    width: ${props => props.styles.width || "auto"};
    
    input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: #303030;
        outline: none;
        width: calc(100% - 20px);
    }

    label {
        width: 100%;
        padding-bottom: 5px;
        color: #303030;
    }
`;