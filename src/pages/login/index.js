import React, { useState } from "react";
import { Button, Card, Container, Footer, Navbar, Textfield } from "../../components";
import { CenterContent } from "./styles";
import { FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleDataForm = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state)
        navigate("/home");
    }

    return (
        <Container fluid>
            <Navbar logo="My to-do list"></Navbar>
            <CenterContent>
                <Card size={"small"}>
                    <form onSubmit={handleSubmit}>
                        <FaUsers size={70}></FaUsers>
                        <Textfield type="text" name="email" label="E-mail" handleChange={handleDataForm} value={state.email} styles={{width: "80%"}}></Textfield>
                        <Textfield type="password" name="password" label="Senha" handleChange={handleDataForm} value={state.password} styles={{width: "80%"}}></Textfield>
                        <div className="links">
                            <Link to="/register"> Registre-se </Link>
                            <Link to="/forget-password"> Esqueci minha senha </Link>
                        </div>
                        <Button type="submit" value="Entrar" styles={{width: "60%", margin: "10px 0 20px"}}></Button>
                    </form>
                </Card>
            </CenterContent>
            <Footer></Footer>
        </Container>
    );
}

export default Login;