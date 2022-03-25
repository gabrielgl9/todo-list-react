import React, { useState } from "react";
import { Button, Card, Container, Footer, Textfield } from "../../components";
import { CenterContent, Title } from "./styles";
import { FaUsers } from "react-icons/fa";

const Login = () => {

    const [state, setState] = useState({});

    const handleDataForm = (event) => {
        setState({
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state)
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
                        <Button type="submit" value="Entrar" styles={{width: "60%"}}></Button>
                    </form>
                </Card>
            </CenterContent>
            <Footer></Footer>
        </Container>
    );
}

export default Login;