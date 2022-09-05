import { TextField, Input, Button } from "@mui/material";
import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import InputGroup from "./InputGroup2";
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
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
export default function CenterCreate({ handleLanguages, value, onChange,
    valueAdmin, onChange2, admin,
    refreshFornewAdmins, setRefresh,
    onChangeHandler, onSubmit, onChangeFile,
    onChangeName, onChangePhone, onChangeEmail, onChangeAdminC, ...rest
}) {

    const [open, setOpen] = React.useState(false);

    
    const handleOpen = () => setOpen(true);
    
    return (

        <div className="row justify-content-between">
            <div className="col-8">
                <form onSubmit={onSubmit} encType="multipart/form-data">
                    <InputGroup
                        label="Name"
                        type="text"
                        name="name"
                        //onChangeHandler={onChangeHandler}
                        onChangeHandler={(e) => { onChangeName(e); onChangeHandler(e) }}
                    />
                    <InputGroup
                        label="Phone"
                        type="text"
                        name="phone"
                        //onChangeHandler={onChangeHandler}
                        onChangeHandler={(e) => { onChangePhone(e); onChangePhone(e) }}
                    />
                    <InputGroup
                        label="Email"
                        type="text"
                        name="email"
                        //onChangeHandler={onChangeHandler}
                        onChangeHandler={(e) => { onChangeEmail(e); onChangeEmail(e) }}
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
                                <input type="color" name="color" onChange={onChange} value={value} {...rest} />
                                <input type="text" name="color" value={value} onChange={(e) => { onChange(e); onChangeHandler(e) }} {...rest} />
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
                                value={valueAdmin}
                                label="Admin"
                                name="admin"
                                fullWidth
                                onChange={(e) => { onChange2(e); onChangeHandler(e); onChangeAdminC(e) }}
                            // onChange={()=> {onChange2() ; onChangeHandler()}}
                            // onChangeHandler={onChangeHandler}
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
                                    control={<Checkbox />}
                                    label="ENGLISH"
                                    labelPlacement="english"
                                    onChange={handleLanguages}
                                />

                                <FormControlLabel
                                    value="french"
                                    control={<Checkbox />}
                                    label="FRENCH"
                                    labelPlacement="french"
                                    onChange={handleLanguages}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex justify-content-end" style={{ padding: '0.5rem' }}>
                            <button className="btn btn-primary" type="submit">Add Center</button>
                        </div>
                    </div>
                </form>
            </div>

            {open && <AddAdminModal open={open} setOpen={setOpen} refreshFornewAdmins={refreshFornewAdmins} setRefresh={setRefresh} />}
        </div>
    );
}

