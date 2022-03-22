import React from "react";
import { ListStyled } from "./styles";

const List = ({items}) => {

    return (
        <ListStyled>
            <ul>
                {items && items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </ListStyled>
    )
}

export default List;