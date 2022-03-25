import React, { useContext } from "react";
import { Table } from "../../../components";
import TodoContext from "../../../providers/todo-context";
import { ListTodoStyled } from "./styles";

const ListTodo = () => {
    const { items, setItems, setEditIndex } = useContext(TodoContext)

    const remove = (item) => {
        const itemsAux = [...items];
        const index = items.indexOf(item);
        itemsAux.splice(index, 1);
        setItems(itemsAux);
    }

    const edit = (item) => {
        const index = items.indexOf(item);
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