import React, {useState, useContext, useEffect} from "react";
import { Button, Textfield } from "../../../components";
import TodoContext from "../../../providers/todo-context";
import { AddTodoStyled } from "./styles";

const AddTodo = () => {
    
    const [newItem, setNewItem] = useState('');
    const { items, setItems, editIndex, setEditIndex } = useContext(TodoContext)


    useEffect(() => {
        if (editIndex !== null) {
            setNewItem(items[editIndex]);
        }
      }, [editIndex, items]); 


    const handleChangeNewItem = (event) => {
        setNewItem(event.target.value);
    };

    const submitNewItem = () => {
        const itemsAux = [...items];
        if (editIndex !== null) {
            itemsAux[editIndex] = newItem;
            setEditIndex(null)
        } else {
            itemsAux.push(newItem);
        }
        setItems(itemsAux);
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