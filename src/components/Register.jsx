import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Register() {


    const [user, setUser] = useState({
        firstName : "",
        lastName :"",
        phone :"",
        email :"",
        password :"",
        passwordConfirm :""
    });

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { firstName , lastName, phone ,email, password, passwordConfirm } = user;
              axios.post("https://ispeak.api.pfe.anypli.com/api/6246e3541d0307b84e2dcfb5/user/register",user)
           
       
    }
  return (
    <div>
    <div className="container shadow my-5">
        <div className="row justify-content-end">
            <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                <h1 className="display-4 fw-bolder">Hello Friend</h1>
                <p className="lead text-center">Enter Your Details To Register</p>
                <h5 className="mb-4">OR</h5>
                <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">
                    Login
                </NavLink>
            </div>
            <div className="col-md-6 p-5">
                <h1 className="display-6 fw-bolder mb-5">Register</h1>
                <form onSubmit={handleInput} methode="POST">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Your First Name" 
                        name="firstName" value={user.firstName} onChange={handleInput}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Your Last Name"
                        name="lasttName" value={user.lasttName} onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="Your Phone"
                        name="phone" value={user.phone} onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email"
                        name="email" value={user.email} onChange={handleInput}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        name="password" value={user.password} onChange={handleInput}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2">Password confirm</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password Confirm"
                        name="passwordConfirm" value={user.passwordConfirm} onChange={handleInput}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">I Agree Terms and Conditions</label>
                    </div>
                        <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill" onClick={handleSubmit}>Register</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
