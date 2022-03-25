import styled from "styled-components";

export const CardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;
    padding: 10px;

    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;

    // Size classes
    &.large {
        width: 80%;
        height: 80vh;
    }
    
    &.medium {
        width: 60%;
        height: 60vh;
    }
    
    &.small {
        width: 40%;
        height: 40vh;
    }
`;