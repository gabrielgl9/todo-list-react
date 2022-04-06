import React, { useState } from "react";
import { Button, Card, Container, Footer, Navbar, Textfield } from "../../components";
import { CenterContent } from "./styles";
import { useNavigate } from "react-router-dom";

const Register = () => {

    let navigate = useNavigate();

    const [state, setState] = useState({
        name: '',
        email: '',
        login: '',
        password: '',
        passwordConfirmation: ''
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
                <Card size={"medium"}>
                    <form onSubmit={handleSubmit}>
                        <div className="aux-padding"></div>
                        <Textfield type="text" name="name" label="Nome" handleChange={handleDataForm} value={state.name} styles={{width: "80%"}}></Textfield>
                        <Textfield type="email" name="email" label="E-mail" handleChange={handleDataForm} value={state.email} styles={{width: "80%"}}></Textfield>
                        <Textfield type="password" name="password" label="Senha" handleChange={handleDataForm} value={state.password} styles={{width: "80%"}}></Textfield>
                        <Textfield type="password" name="passwordConfirmation" label="Confirmar Senha" handleChange={handleDataForm} value={state.passwordConfirmation} styles={{width: "80%"}}></Textfield>
                        <Button type="submit" value="Entrar" styles={{width: "60%", margin: "10px 0 20px"}}></Button>
                    </form>
                </Card>
            </CenterContent>
            <Footer></Footer>
        </Container>
    );
}

export default Register;