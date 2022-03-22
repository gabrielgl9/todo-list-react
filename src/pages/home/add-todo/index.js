import React, {useState, useContext} from "react";
import { Button, Textfield } from "../../../components";
import TodoContext from "../../../providers/todo-context";
import { AddTodoStyled } from "./styles";

const AddTodo = () => {
    
    const [newItem, setNewItem] = useState('');
    const { items, setItems } = useContext(TodoContext)

    const handleChangeNewItem = (event) => {
        setNewItem(event.target.value);
    };

    const submitNewItem = () => {
        setItems([...items, newItem]);
        setNewItem('');
    };

    return (
        <AddTodoStyled>
            <Textfield type="text" name="item" handleChange={handleChangeNewItem} value={newItem}></Textfield>
            <Button type="button" value="Salvar" clickButton={submitNewItem}></Button>
        </AddTodoStyled>
    );
}

export default AddTodo;