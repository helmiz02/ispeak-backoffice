import { TextField, Input, Button } from "@mui/material";
import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import InputGroup from "./InputGroup2";
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from "moment"
import AddInstructorModal from "./addInstructorModal";

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
export default function CreateSession({ valueLanguage, valueLevel, valueInstructor, onChangeHandler, onChange, form,
    onChange2, onChange3, onChange4, refreshFornewAdmins, setRefresh, onSubmit, instructor, onChangeBeginDate, idCenter, onChangeEndDate }) {

    const [open, setOpen] = React.useState(false);


    const handleOpen = () => setOpen(true);

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>

            <div className="row justify-content-between">
                <div className="col-8">
                    <form onSubmit={onSubmit} >
                        <InputGroup
                            label="Name"
                            type="text"
                            name="name"
                            onChangeHandler={onChangeHandler}
                        />
                        <div class="row">

                            <div class="col" style={{ padding: '0.5rem' }}>
                                <label for="Email" className="form-label" >Begin Date</label>
                            </div>

                            <div class="col" style={{ padding: '0.5rem' }}>
                                <DesktopDatePicker
                                    label="Begin Date"
                                    inputFormat="DD-MM-YYYY"
                                    name="beginDate"
                                    value={form.beginDate}
                                    onChange={onChangeBeginDate}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </div>
                        </div>
                        <div class="row">

                            <div class="col" style={{ padding: '0.5rem' }}>
                                <label for="Email" className="form-label" >End Date</label>
                            </div>

                            <div class="col" style={{ padding: '0.5rem' }}>

                                <DesktopDatePicker
                                    label="End Date"
                                    inputFormat="DD-MM-YYYY"
                                    name="endDate"
                                    value={form.endDate}
                                    onChange={onChangeEndDate}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" style={{ padding: '0.5rem' }}>
                                <label for="Email" className="form-label" >Language</label>
                            </div>

                            <div class="col" style={{ padding: '0.5rem' }}>
                                <Select
                                    labelId="Language"
                                    id="Language"
                                    value={valueLanguage}
                                    label="Language"
                                    name="language"
                                    fullWidth
                                    onChange={(e) => { onChange2(e); onChangeHandler(e) }}
                                >
                                    <MenuItem value="french">French</MenuItem>
                                    <MenuItem value="english">English</MenuItem>
                                </Select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col" style={{ padding: '0.5rem' }}>
                                <label for="Email" className="form-label" >Level</label>
                            </div>

                            <div class="col" style={{ padding: '0.5rem' }}>
                                <Select

                                    labelId="Level"
                                    id="Level"
                                    value={valueLevel}
                                    label="Level"
                                    name="level"
                                    fullWidth
                                    onChange={(e) => { onChange3(e); onChangeHandler(e) }}
                                >
                                    <MenuItem value="advanced">Advanced</MenuItem>
                                    <MenuItem value="medium">Medium</MenuItem>
                                    <MenuItem value="beginner">Beginner</MenuItem>
                                </Select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col" style={{ padding: '0.5rem' }}>
                                <label for="Email" className="form-label" >Instructor</label>
                            </div>

                            <div class="col" style={{ padding: '0.5rem' }}>
                                <Select

                                    labelId="Instructor"
                                    id="Instructor"
                                    value={valueInstructor}
                                    label="Instructor"
                                    name="instructor"
                                    fullWidth
                                    onChange={(e) => { onChange4(e); onChangeHandler(e) }}
                                >
                                    {instructor?.map((item) => (
                                        <MenuItem value={item._id}>{item.firstName}</MenuItem>
                                    ))}
                                </Select>
                                <Button onClick={handleOpen}>New Instructor</Button>
                            </div>
                        </div>


                        <div class="row">
                            <div class="d-flex justify-content-end" style={{ padding: '0.5rem' }}>
                                <button className="btn btn-primary" type="submit">Add Session</button>
                            </div>
                        </div>
                    </form>
                </div>

                {open && <AddInstructorModal idCenter open={open} setOpen={setOpen} refreshFornewAdmins={refreshFornewAdmins} setRefresh={setRefresh} />}
            </div>
        </LocalizationProvider>

    );
}

