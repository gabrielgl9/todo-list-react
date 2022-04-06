import styled from "styled-components";

export const MainContent = styled.div`
    display: flex;
    align-items: initial;
    justify-content: center;
    flex-direction: row;

    min-height: 90vh;
    width: 100%;

    nav {
        flex: 1;
    }

    main {
        flex: 4;
        background: grey;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;

        h3 {
            font-size: 30px;
        }

        div {
            min-height: 80vh;
        }
    }
`;
