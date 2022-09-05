import { TextField, Input } from "@mui/material";
import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import InputGroup from "./InputGroup2";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function InstructorCreate({ form, formErrors, onChangeHandler, onSubmit, handleClose }) {

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
                    <p style={{ color: "rgb(211,47,47)" }} >{formErrors.firstName}</p>
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
                    <p style={{ color: "rgb(211,47,47)" }}  >{formErrors.lastName}</p>
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
                    <p style={{ color: "rgb(211,47,47)" }}  >{formErrors.email}</p>
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
                    <p style={{ color: "rgb(211,47,47)" }}  >{formErrors.phone}</p>
                    <div class="row">
                        <div class="col" style={{ padding: '0.5rem' }}>
                            <label for="Email" className="form-label" >Language</label>
                        </div>

                        <div class="col" style={{ padding: '0.5rem' }}>
                            <Select
                                labelId="Language"
                                id="Language"
                                value={form.language}
                                label="Language"
                                name="language"
                                fullWidth
                                //onChange={(e) => { onChange2(e); onChangeHandler(e) }}
                                onChange={(e) => {
                                    onChangeHandler(e)
                                    let newState = centerDataState
                                    newState.language = e.target.value
                                    setStateCenterDataState({ ...newState })
                                }
                                }
                            >
                                <MenuItem value="french">French</MenuItem>
                                <MenuItem value="english">English</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <p style={{ color: "rgb(211,47,47)" }}  >{formErrors.language}</p>
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
                    <p style={{ color: "rgb(211,47,47)" }} >{formErrors.password}</p>
                    <button className="btn btn-primary" type="submit">Add Admin</button>
                    <button style={{ marginLeft: 8 }} className="btn btn-primary" onClick={() => handleClose()}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

