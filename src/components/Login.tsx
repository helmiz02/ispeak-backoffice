import React, {  useState } from 'react';

import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const submitForm = (e: any) => {
        e.preventDefault()
        let login = {
            email,
            password
        }
        axios.post("https://ispeak.api.pfe.anypli.com/api/user/login", login
        ).then(response => {
            localStorage.setItem("token", response.data.user.token)
            localStorage.setItem("role", response.data.user.role)
            localStorage.setItem("id", response.data.user._id)
            window.location.pathname = "/home";
        }


        )
            .catch(error => setError(true))
        console.log(password, email)
        console.log(e)

    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Welcome</h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        {/* <h5 className="mb-4">OR</h5> */}
                        {/* <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">
                        Register
                    </NavLink> */}
                    
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Login</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" placeholder="Enter email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    onChange={(e) => setPassword(e.target.value)}

                                    placeholder="Password" />
                            </div>
                            <div className="mb-3">
                                {error ?
                                    <p style={{ color: "red", fontWeight: "bold" }}>Email ou mot de passe incorrect</p>
                                    : null

                                }
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill" onClick={(e) => submitForm(e)}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
