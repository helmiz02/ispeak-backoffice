import { TextField, Input } from "@mui/material";
import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import InputGroup from "./InputGroup2";


export default function CenterAdmin({form , formErrors,  onChangeHandler, onSubmit, handleClose }) {
    
    const [centerDataState, setStateCenterDataState] = React.useState({ ...form });
    
    React.useEffect(() => {
        setStateCenterDataState({ ...form })

    }, [form])

    

    return (
        <div className="">
            <div className="col-12 ">
                
            <form onSubmit={(e) => onSubmit(e, centerDataState)} >

<InputGroup
    label="First Name"
    type="text"
    name="firstName"
    //onChangeHandler={onChangeHandler}
    onChangeHandler={(e) => {
        onChangeHandler(e)
        let newState = centerDataState
        newState.firstName = e.target.value
        setStateCenterDataState({ ...newState })
    }
    }
    value={form.firstName}
    

/>
<p>{formErrors.firstName}</p>
<InputGroup
    label="Last Name"
    type="text"
    name="lastName"
    //onChangeHandler={onChangeHandler}
    onChangeHandler={(e) => {
        onChangeHandler(e)
        let newState = centerDataState
        newState.lastName = e.target.value
        setStateCenterDataState({ ...newState })
    }
    }
    value={form.lastName}
/>
<p>{formErrors.lastName}</p>
<InputGroup
    label="Email"
    type="text"
    name="email"
    //onChangeHandler={onChangeHandler}
    onChangeHandler={(e) => {
        onChangeHandler(e)
        let newState = centerDataState
        newState.email = e.target.value
        setStateCenterDataState({ ...newState })
    }
    }
    value={form.email}
/>
<p>{formErrors.email}</p>
<InputGroup
    label="Phone"
    type="text"
    name="phone"
    //onChangeHandler={onChangeHandler}
    onChangeHandler={(e) => {
        onChangeHandler(e)
        let newState = centerDataState
        newState.phone = e.target.value
        setStateCenterDataState({ ...newState })
    }
    }
    value={form.phone}

/>
<p>{formErrors.phone}</p>
<InputGroup
    label="Password"
    type="text"
    name="password"
    //onChangeHandler={onChangeHandler}
    onChangeHandler={(e) => {
        onChangeHandler(e)
        let newState = centerDataState
        newState.phone = e.target.value
        setStateCenterDataState({ ...newState })
    }
    }
    value={form.password}

/>
<p>{formErrors.password}</p>
<button className="btn btn-primary" type="submit">Add Admin</button>
<button style={{marginLeft:8}} className="btn btn-primary" onClick={()=>handleClose()}>Cancel</button>
</form>
            </div>
        </div>
    );
}

