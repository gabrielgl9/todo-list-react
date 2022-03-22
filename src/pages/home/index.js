import React, {useState} from "react";
import { Navbar, Container, Footer } from "../../components";
import TodoContext from "../../providers/todo-context";
import AddTodo from "./add-todo";
import ListTodo from "./list-todo";

const Home = () => {
    
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    return (
        <TodoContext.Provider value={{items, setItems, editIndex, setEditIndex}}>
            <Navbar logo="My to-do list"></Navbar>
            <Container>
                <AddTodo></AddTodo>
                <ListTodo></ListTodo>
            </Container>
            <Footer></Footer>
        </TodoContext.Provider>
    );
}

export default Home;