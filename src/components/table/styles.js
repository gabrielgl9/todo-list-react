import styled from "styled-components";

export const TableStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    .actions {
        cursor: pointer;
    }

    .actions svg:first-child {
        color: #ed4e4e;
        padding-right: 5px;
    }

    .actions svg:last-child {
        padding-left: 5px;
        color: #429142;
    }

    table {
        width: 100%;
    }

    td, th {
        border-bottom: 1px solid #ddd;
        text-align: center;
        padding: 10px;
    }
`;