import styled from "styled-components";

export const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    height: 10vh;
    
    text-align: center;
    font-size: 22px;
    background: #008080;
    color: #fff;
`;

export const CenterContent = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    svg {
        color: #008080;
    }
`;