import React from "react";
import { ListStyled } from "./styles";

const List = ({items, color = '#000'}) => {

    return (
        <ListStyled color={color}>
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