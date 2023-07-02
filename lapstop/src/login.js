import React, { useState } from "react"
import './login.css';
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
export default function Login() {
    const baseURL = "http://localhost:8080/api/Laptops"
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const user1 = { name, email, password }
    const [post, setPost] = useState('null');
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const errors = {
        email: "invalid username",
        password: "invalid password"
    };
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user1 = { email, name, password }
        axios
            .post('http://localhost:8080/api/Laptops/login', user1)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("Email", email)
                navigate('/home');
            })
            .catch((error) => {
                console.error(error.response.data); // Log the error response from the server
                // Display an appropriate error message to the user
                if (error.response.status === 401) {
                    alert('Invalid username or password');
                } else if (error.response.status === 404) {
                    alert('Username does not exist');
                } else {
                    alert('An error occurred during login');
                }
            });

    };
    const handleClick = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(user1));
        axios.post(`${baseURL}/signup`, (user1)).then( navigate("/"));
       
    }
    let [authMode, setAuthMode] = useState(true)
    const changeAuthMode = () => {
        setAuthMode(!authMode)
    }
    return (
        <>
            {authMode ?
                <>
                    < div className="Auth-form-container" >
                        <div className="Auth-form">
                            <div className="Auth-form-content">
                                <form onSubmit={handleSubmit}>
                                    <h3 className="Auth-form-title">Sign In</h3>
                                    <div className="text-center">
                                        Not registered yet?{" "}
                                        <span className="link-primary" onClick={changeAuthMode}>
                                            Sign Up
                                        </span>
                                    </div>
                                    <div className="formbox">
                                        <div className="form-group mt-3">
                                            <label>Email </label>
                                            <input type="text" name="email" className="form-control mt-1" required onChange={(e) => setEmail(e.target.value)} />
                                            {renderErrorMessage("email")}
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Password </label>
                                            <input type="password" name="password" className="form-control mt-1" required onChange={(e) => setPassword(e.target.value)} />
                                            {renderErrorMessage("pass")}
                                        </div>
                                        <div className="d-grid gap-2 mt-3">
                                            <input type="submit" className="btn btn-primary" />
                                        </div>
                                    </div>
                                </form>
                                <p className="text-center-mt-2">
                                    Forgot <a href="#">password?</a>
                                </p>
                            </div>
                        </div>
                    </div >
                </>
                :

                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign Up</h3>
                            <div className="text-center">
                                Already registered?{" "}
                                <span className="link-primary" onClick={changeAuthMode}>
                                    Sign In
                                </span>
                            </div>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Email Address"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="e.g Jane Doe"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Password"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={handleClick}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>


            }
            <Outlet />
        </>
    )
}