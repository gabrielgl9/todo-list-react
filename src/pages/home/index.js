import React from "react";
import { Navbar, Container, Sidebar, Card } from "../../components";
import { MainContent } from "./styles";

const Home = () => {

    return (
        <>
            <Navbar logo="My to-do list" />
            <MainContent>
                <Sidebar />
                <Container wrapper="secundary">
                    <div className="content">
                        <Card size={"medium"}>
                            <h3> Workspace </h3>
                        </Card>
                    </div>
                </Container> 
            </MainContent>
        </>
    );
}

export default Home;