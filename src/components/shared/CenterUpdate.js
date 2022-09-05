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
export default function CenterUpdate({ handleLanguages, value, onChange,
    valueAdmin, onChange2, admin,
    refreshFornewAdmins, setRefresh,
    onChangeHandler, onSubmit, onChangeFile,
    onChangeName, onChangePhone, onChangeEmail, onChangeAdminC, centreData, ...rest
}) {

    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();
    const [centerDataState, setStateCenterDataState] = React.useState({ ...centreData });
    const handleOpen = () => setOpen(true);
    const OnDelete = (id) => {
        navigate(`/detailsCenter/${id}`);
    }

    React.useEffect(() => {
        setStateCenterDataState({ ...centreData })

    }, [centreData])
   console.log(centerDataState.admin)
    return (
        centerDataState.admin?
        <div className="row justify-content-between">
            <div className="col-8">
                <form onSubmit={(e) => onSubmit(e, centerDataState)} encType="multipart/form-data">
                    <InputGroup
                        label="Name"
                        type="text"
                        name="name"
                        onChangeHandler={(e) => {
                            let newState = centerDataState
                            newState.name = e.target.value
                            setStateCenterDataState({ ...newState })
                        }
                        }
                        value={centerDataState.name}
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
                    <InputGroup
                        id="outlined-full-width"
                        label="Logo"
                        style={{ margin: 8 }}
                        name="logo"
                        type="file"
                        fullWidth
                        filename="logo"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        //onChangeHandler={onChangeHandler}
                        //onChange={onChangeFile}
                        //onChangeHandler={onChangeFile}
                        onChangeHandler={(e) => { onChangeFile(e); onChangeHandler(e) }}
                    />
                    <div class="row">
                        <div class="col" style={{ padding: '0.5rem' }}>
                            <label for="Email" className="form-label">Color</label>
                        </div>
                        <div class="col" style={{ padding: '0.5rem' }}>
                            <Container >
                                <input type="color" name="color" onChange={

                                    (e) => {
                                        let newState = centerDataState
                                        newState.color1 = e.target.value
                                        setStateCenterDataState({ ...newState })



                                    }
                                } value={centerDataState.color1} {...rest} />
                                <input type="text" name="color" value={centerDataState.color1}
                                    onChange={(e) => {
                                        let newState = centerDataState
                                        newState.color1 = e.target.value
                                        setStateCenterDataState({ ...newState })
                                    }}

                                    {...rest} />
                            </Container>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style={{ padding: '0.5rem' }}>
                            <label for="Email" className="form-label" >Admin</label>
                        </div>

                        <div class="col" style={{ padding: '0.5rem' }}>
                            <Select
                                labelId="Admin"
                                id="Admin"
                                value={centerDataState.admin._id}
                                label="Admin"
                                name="admin"
                                fullWidth
                                onChange={(e) => {
                                         let newState = centerDataState
                                        newState.admin = e.target
                                        newState.admin._id = e.target.value
                                        setStateCenterDataState({ ...newState })
                                    }



                                 }
                            >
                                {admin?.map((item) => (
                                    <MenuItem value={item._id}>{item.firstName}</MenuItem>
                                ))}

                            </Select>
                            <Button onClick={handleOpen}>New Admin</Button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style={{ padding: '0.5rem' }}>
                            <label component="legend">Language</label>
                        </div>
                        <div class="col" style={{ padding: '0.5rem' }}>
                            <FormGroup aria-label="position" >
                                <FormControlLabel
                                    value="english"
                                    checked={centerDataState.language?.findIndex(item => item === "english") > -1 ? true : false}
                                    control={<Checkbox />}
                                    label="ENGLISH"
                                    labelPlacement="english"
                                    onChange={(e) => {
                                        let newState = centerDataState
                                        if (e.target.checked)
                                            newState.language.push("english")
                                        else {
                                            let newLanguage = newState.language.filter(item => item !== "english")
                                            newState.language = newLanguage
                                        }

                                        console.log(newState)
                                        setStateCenterDataState({ ...newState })
                                    }}


                                />

                                <FormControlLabel
                                    value="french"
                                    control={<Checkbox />}
                                    label="FRENCH"
                                    labelPlacement="french"
                                    onChange={(e) => {
                                        let newState = centerDataState
                                        if (e.target.checked)
                                            newState.language.push("french")
                                        else {
                                            let newLanguage = newState.language.filter(item => item !== "french")
                                            newState.language = newLanguage
                                        }

                                        setStateCenterDataState({ ...newState })
                                    }} checked={centerDataState.language?.findIndex(item => item === "french") > -1 ? true : false}

                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex justify-content-end" style={{ padding: '0.5rem' }}>
                            <button className="btn btn-primary" type="submit">Center Update</button>
                        </div>
                    </div>
                </form>
            </div>

            {open && <AddAdminModal open={open} setOpen={setOpen} refreshFornewAdmins={refreshFornewAdmins} setRefresh={setRefresh} />}
        </div>
        :null
    );
}
