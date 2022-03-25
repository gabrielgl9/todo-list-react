import styled from "styled-components";

export const CenterContent = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .links {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        a {
            flex: 1;
            color: #5656f9;
            font-size: 16px;
            text-decoration: none;
        }

        a:last-child {
            text-align: end;
        }
    }

    svg {
        margin: 20px 0 10px;
        color: #008080;
    }
`;
