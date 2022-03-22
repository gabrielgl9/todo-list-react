import React, {useState} from "react";
import { Navbar, Container } from "../../components";
import TodoContext from "../../providers/todo-context";
import AddTodo from "./add-todo";
import ListTodo from "./list-todo";

const Home = () => {
    
    const [items, setItems] = useState([]);

    return (
        <TodoContext.Provider value={{items, setItems}}>
            <Navbar logo="My to-do list"></Navbar>
            <Container>
                <AddTodo></AddTodo>
                <ListTodo></ListTodo>
            </Container>
        </TodoContext.Provider>
    );
}

export default Home;