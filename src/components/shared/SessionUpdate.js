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

import AddInstructorModal from "./addInstructorModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from 'moment'

import axios from 'axios'
import { useEffect, useState } from 'react'

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
export default function CreateSession({ idSession, course, questionData, sessionData, valueLanguage, valueLevel, valueInstructor, onChangeHandler, onChange, form,
    onChange2, onChange3, onChange4, refreshFornewAdmins, setRefresh, onSubmit, instructor, onChangeBeginDate, idCenter, onChangeEndDate }) {

    const [open, setOpen] = React.useState(false);
    const [sessionDataState, setStateSessionDataState] = React.useState({ ...sessionData });
    const handleOpen = () => setOpen(true);

    const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");

    const columnsCourse = [
        { id: 'id', label: 'Id', minWidth: 170 },
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'actions', label: 'Actions ', minWidth: 170 }
    ];

    React.useEffect(() => {
        setStateSessionDataState({ ...sessionData })
    }, [sessionData])

    const onDelete = (id) => {
        if (window.confirm("are you sure to delete this course")) {

            axios.delete(`https://ispeak.api.pfe.anypli.com/api/${idCenter}/course/${id}/${idSession}`, { headers: { Authorization: `${token}` } })
              .then(res => {
                setMessage(res.data.message)
                setShow(true)
                setTimeout(() => {
                  setShow(false)
                }, 4000);
              })
            window.location.reload(false);
          }
    }

    const handelClick = (id) => {
        navigate(`/courseDetails/${id}/${idCenter}`);
    }

    const handelClick2 = (id) => {
        navigate(`/createcourse/${idSession}/${idCenter}`);
    }

    const navigate = useNavigate();

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>


            <div className="col">
                <form onSubmit={onSubmit} >
                    <div className="col-8">
                        <InputGroup
                            label="Name"
                            type="text"
                            name="name"
                            value={sessionDataState.name}
                            //onChangeHandler={onChangeHandler}
                            onChangeHandler={(e) => {
                                let newState = sessionDataState
                                newState.name = e.target.value
                                setStateSessionDataState({ ...newState })
                            }}
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
                    </div>
                    <div class="row">
                        <div class="col-md-auto" >
                            <h4 style={{ textAlign: 'left', padding: '0.5rem' }}> Course : </h4>
                        </div>
                        <div class="col-md-auto" style={{ padding: '0.5rem' }}>
                            <Button onClick={() => handelClick2()} >Create course</Button>
                        </div>
                    </div>
                    <div class="row" style={{ padding: '0.5rem' }}>
                        <div class="col">
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {columnsCourse.map((row) => (
                                                <TableCell align="left">{row.label} </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {course.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                            >
                                                <TableCell align="left">{row._id}</TableCell>
                                                <TableCell align="left">{row.name}</TableCell>
                                                <TableCell align="left">
                                                    <div ><Button color="secondary" onClick={() => handelClick(row._id)} >Details</Button></div>
                                                    <div ><Button color="error" onClick={() => onDelete(row._id)} >Delete</Button></div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d-flex justify-content-end" style={{ padding: '0.5rem' }}>
                            <button className="btn btn-primary" type="submit">Update Session</button>
                        </div>
                    </div>
                </form>
            </div>

            {open && <AddInstructorModal idCenter open={open} setOpen={setOpen} refreshFornewAdmins={refreshFornewAdmins} setRefresh={setRefresh} />}

        </LocalizationProvider>

    );
}