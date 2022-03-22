import styled from "styled-components";

export const FooterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;

    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    
    background: #008080;
    color: #fff;
    height: 10vh;

    .title, .social-medias {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        padding: 10px;
    }

    .social-medias svg {
        padding-right: 10px;
        color: #fff;
        cursor: pointer;
    }
`;
