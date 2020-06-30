import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../Css/Login.css";
import Welcome from "./Welcome";
import Retry from "./Retry";

export default function Login(props) {
    const [email, setEmail] = useState("root@yahoo.com"); //will set initial value to email with setEmail function
    const [password, setPassword] = useState("root");
    const [isLoggedIn, setLoggedIn] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email==='root@yahoo.com') {
            console.log('please change the default email');
        }
        else if (email==='sandesh.lamsal@gmail.com' && password==='lamsal') {
            console.log('Login Sucess')
            return setLoggedIn(true);
        }
        else
            console.log('Retry')
            return <Retry/>;
    }

    function verifyUser(event){
        //logic to handle user login
    }

    return (
        <div className="Login">
            {isLoggedIn ? <Welcome/> :
                <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                { !props.hidePassword && <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup> }

                <Button block disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>}
        </div>
    );
}