import React, { useState } from "react";
import { Button, Card, Container, Footer, Textfield } from "../../components";
import { CenterContent, Title } from "./styles";
import { FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();

    const [state, setState] = useState({
        login: '',
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
        navigate("/todo");
    }

    return (
        <Container fluid>
            <Title> My to-do List </Title>
            <CenterContent>
                <Card size={"small"}>
                    <form onSubmit={handleSubmit}>
                        <FaUsers size={70}></FaUsers>
                        <Textfield type="text" name="login" label="Login" handleChange={handleDataForm} value={state.login} styles={{width: "80%"}}></Textfield>
                        <Textfield type="password" name="password" label="Senha" handleChange={handleDataForm} value={state.password} styles={{width: "80%"}}></Textfield>
                        <div className="links">
                            <Link to="/register"> Registre-se </Link>
                            <Link to="/forget-password"> Esqueci minha senha </Link>
                        </div>
                        <Button type="submit" value="Entrar" styles={{width: "60%"}}></Button>
                    </form>
                </Card>
            </CenterContent>
            <Footer></Footer>
        </Container>
    );
}

export default Login;