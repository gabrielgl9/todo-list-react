import styled from "styled-components";

export const ContainerStyled = styled.main`
    margin: 0 auto;
    max-width: ${props => props.fluid ? "100%" : "90%"};
    /* min-width: ${props => props.fluid ? "100%" : "90%"}; */
    /* min-height: 100vh; */
    /* max-height: 100vh; */

    &.default {
        background: none;
    }

    &.primary {
        background: #008080;
        color: #fff;
    }

    &.secundary {
        background: #d3d3d3;
    }

    form {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;