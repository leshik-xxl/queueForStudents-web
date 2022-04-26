import {FormEvent, useContext, useState} from "react";
import {Button, Form} from "react-bootstrap";
import './Login.css';
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/UserContex";

export function Login() {
    const [username, setUsername] = useState<string>('');
    const navigate = useNavigate();
    const {onLogin} = useContext(UserContext)

    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogin(username);
        navigate('/queue');
    }

    return (
        <div className="form-center">
            <Form onSubmit={submitForm}>
                <Form.Label>Your Name:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}>
                </Form.Control>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}


