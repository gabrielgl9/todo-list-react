import React, { useContext } from "react";
import { List } from "../../../components";
import TodoContext from "../../../providers/todo-context";
import { ListTodoStyled } from "./styles";

const ListTodo = () => {
    const { items } = useContext(TodoContext)

    return (
        <ListTodoStyled>
            <List items={items}></List>
        </ListTodoStyled>
    );
}

export default ListTodo;