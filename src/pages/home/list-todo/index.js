import React, { useContext } from "react";
import { Table } from "../../../components";
import TodoContext from "../../../providers/todo-context";
import { ListTodoStyled } from "./styles";

const ListTodo = () => {
    const { items, setItems, setEditIndex } = useContext(TodoContext)

    const remove = (index) => {
        const itemsAux = [...items];
        itemsAux.splice(index, 1);
        setItems(itemsAux);
    }

    const edit = (index) => {
        setEditIndex(index);
    }

    return (
        <ListTodoStyled>
            <Table 
                headers={['#', 'Itens']} 
                items={items} 
                removeItem={remove} 
                editItem={edit}>
            </Table>
        </ListTodoStyled>
    );
}

export default ListTodo;