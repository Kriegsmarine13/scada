import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

// import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm';
import { useAuth } from "../context/auth";
function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    // const referer = props.location.state.referer || '/';

    function postLogin() {
        console.log("userName: ",userName);
        console.log("password: ",password);
        // axios.get("http://localhost:3099/");
        axios.post("http://10.88.0.10:3099/login", {
            userName,
            password
        }).then(result => {
            console.log("axios success")
            if (result.status === 200) {
                console.log("result.data: ", result.data);
                setAuthTokens("Authenticated");
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            console.log("axios error: ",e)
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to="/home" />;
    }


    return (
        <Card>
            <Form>
                <Input
                    type="username"
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="Логин"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Пароль"
                />
                <Button onClick={postLogin}>Войти</Button>
            </Form>
            { isError &&<Error>Неверное имя пользователя или пароль!</Error> }
        </Card>
    );
}

export default Login;