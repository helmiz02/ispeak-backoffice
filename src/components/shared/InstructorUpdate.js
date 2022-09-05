import { TextField, Input, Button } from "@mui/material";
import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import InputGroup from "./InputGroup2";
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import AddAdminModal from "./addAdminModal";

const Container = styled.span`
display: inline-flex;
align-items: center;
width: 150px;
max-width: 150px;
padding: 4px 12px;
border: 1px solid #bfc9d9;
border-radius: 4px;

input[type="color"] {
    margin-right: 8px;
    border: none;
    background: none;
    height: auto;
    width: auto;
    &::-webkit-color-swatch-wrapper {
        height: 14px;
        width: 14px;
        padding: 0;
    }
    &::-webkit-color-swatch {
        border: 1px solid #bfc9d9;
        border-radius: 4px;
    }

}

input[type="text"] {
    border: none;
    width: 100%;
    font-size: 14;
}
`;
export default function InstructorUpdate({ admin, onSubmit, valueLanguage}) {

    

    
    const [centerDataState, setStateCenterDataState] = React.useState({ ...admin });
    
    console.log(admin,"tttt");
    React.useEffect(() => {
        setStateCenterDataState({ ...admin })

    }, [admin])

    return (

        <div className="row justify-content-between">
            <div className="col-8">
                <form onSubmit={(e) => onSubmit(e, centerDataState)} encType="multipart/form-data">
                    <InputGroup
                        label="FirstName"
                        type="text"
                        name="firstName"
                        //onChangeHandler={onChangeHandler}

                        onChangeHandler={(e) => {
                            let newState = centerDataState
                            newState.firstName = e.target.value
                            setStateCenterDataState({ ...newState })
                        }
                        }
                        value={centerDataState.firstName}
                    />
                    <InputGroup
                        label="LastName"
                        type="text"
                        name="lastName"
                        //onChangeHandler={onChangeHandler}

                        onChangeHandler={(e) => {
                            let newState = centerDataState
                            newState.lastName = e.target.value
                            setStateCenterDataState({ ...newState })
                        }
                        }
                        value={centerDataState.lastName}
                    />
                    <InputGroup
                        label="Phone"
                        type="number"
                        name="phone"
                        //onChangeHandler={onChangeHandler}
                        onChangeHandler={(e) => {
                            let newState = centerDataState
                            newState.phone = e.target.value
                            setStateCenterDataState({ ...newState })
                        }
                        }
                        value={centerDataState.phone}
                    />
                    
                     <div class="row">
                        <div class="col" style={{ padding: '0.5rem' }}>
                            <label for="Email" className="form-label" >Language</label>
                        </div>

                        <div class="col" style={{ padding: '0.5rem' }}>
                            <Select

                                labelId="language"
                                id="Language"
                                value={centerDataState.language}
                                label="Language"
                                name="language"
                                fullWidth
                                onChange={(e) => {  }}
                            >
                                {valueLanguage?.map((item) => (
                                    <MenuItem value={item}>{item}</MenuItem>
                                ))}

                            </Select>
                        </div>
                    </div>
                    <div class="row">
                         <div class="d-flex justify-content-end" style={{ padding: '0.5rem' }}>
                            <button className="btn btn-primary" type="submit">Instructor Update</button>
                         </div>
                    </div>
                </form>
            </div>
        </div>
    );
}