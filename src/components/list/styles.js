import styled from "styled-components";

export const ListStyled = styled.div`
    
    ul {
        padding: 0;
        list-style: none;
        color: ${props => props.color};
    }

    ul li {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 18px;
        padding: 5px 0;
        font-weight: 500;
        text-align: center;
    }

    ul li svg {
        padding-right: 10px;
    }
`;