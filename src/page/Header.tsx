import {Container, Navbar, NavDropdown} from "react-bootstrap";
import {IStudent, Queue} from "./Queue";
import React, {useContext} from "react";
import {UserContext} from "../context/UserContex";
import {useNavigate} from "react-router-dom";
import Api from "../api";

export function Header() {
    const {username, onLogout} = useContext(UserContext);
    const navigate = useNavigate();

    const actionTheQueue = () => {
        Api.get<IStudent>('/action?userName=' + username);
    }

    const logout = () => {
        onLogout();
        navigate('/login');
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavDropdown title="Actions">
                        <NavDropdown.Item onClick={actionTheQueue}>Take the queue / Leave the queue</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={username}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
            <Queue/>
        </div>
    )
}