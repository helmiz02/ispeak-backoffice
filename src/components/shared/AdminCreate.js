import { TextField, Input } from "@mui/material";
import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import InputGroup from "./InputGroup2";


export default function CenterAdmin({ onChangeHandler, onSubmit, handleClose }) {

    return (
        <div className="">
            <div className="col-12 ">
                <form onSubmit={onSubmit}>

                    <InputGroup
                        label="First Name"
                        type="text"
                        name="firstName"
                        onChangeHandler={onChangeHandler}
                        

                    />
                    <InputGroup
                        label="Last Name"
                        type="text"
                        name="lastName"
                        onChangeHandler={onChangeHandler}

                    />
                    <InputGroup
                        label="Email"
                        type="text"
                        name="email"
                        onChangeHandler={onChangeHandler}

                    />
                    <InputGroup
                        label="Phone"
                        type="text"
                        name="phone"
                        onChangeHandler={onChangeHandler}

                    />
                    <InputGroup
                        label="Password"
                        type="text"
                        name="password"
                        onChangeHandler={onChangeHandler}

                    />
                    <button className="btn btn-primary" type="submit">Add Admin</button>
                    <button style={{marginLeft:8}} className="btn btn-primary" onClick={()=>handleClose()}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

