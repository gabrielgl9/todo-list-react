import styled from "styled-components";

export const CardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;

    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;

    // Size classes
    &.large {
        width: 80%;
    }
    
    &.medium {
        width: 60%;
    }
    
    &.small {
        width: 40%;
    }
`;