import React, { useState } from "react"
import InputGroup from "./InputGroup2";
import Button from '@mui/material/Button';
import AddQuestionModal from "./addQuestionModal";
import QuesToaddTable from "./quesToaddTable";
import axios from 'axios'
import socketIOClient from "socket.io-client";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { io } from "socket.io-client";
import { useEffect, useRef } from "react";

export default function CreateCourse({ refreshFornewCourses, setRefresh, idCenter, idSession }) {


    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({});
    const [questionChoice, setquestionChoice] = useState("");
    const [quesListe, setquesListe] = useState([]);
    const token = localStorage.getItem("token");
    const [fileName, setFileName] = useState("")
    const [name, setName] = useState("")
    const [errors, setErrors] = useState({});

    const columns = [
        { id: 'id', label: 'Id', minWidth: 170 },
        { id: 'type', label: 'Type', minWidth: 170 },
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'content', label: 'Content', minWidth: 170 },
        { id: 'content', label: 'Content', minWidth: 170 },
        { id: 'content', label: 'Content', minWidth: 170 },
        { id: 'actions', label: 'Actions', minWidth: 170 },
    ];

    const onChangeHandler = (e) => {
        /*setForm({
            ...form,
            [e.target.name]: e.target.value,
        });*/
        setName(e.target.value);
    };

    const handelClick = (choice) => {
        setOpen(true)
        setquestionChoice(choice)
    }
    const refacturingArrIDS = () => {
        let newArry = []
        newArry = quesListe.map((item) => item._id)
        // setchoiceArray(newArry);
        return newArry
    }

    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
        console.log(e.target.files[0])
    }
    const navigate = useNavigate();
    const onSubmitHandler = async (e) => {

        e.preventDefault();

        const questionl = await refacturingArrIDS()
        //form.question = question

        form.content = fileName

        console.log("DDDD", form);

        const formData = new FormData();
        formData.append("name", name)
        for (var i = 0; i < questionl.length; i++) {
            formData.append("question", questionl[i])
        }
        formData.append("content", fileName)


        axios.post(`http://localhost:5000/api/${idCenter}/course/${idSession}`, formData, { headers: { Authorization: `${token}`, 'content-type': 'multipart/form-data' } })
            .then(res => {
                console.log(res.data.course._id);
                navigate(`/sessionUpdate/${idSession}/${idCenter}`);

            })
            .catch(err => setErrors(err.response.data))

    }
    return (
        <form onSubmit={onSubmitHandler} encType="multipart/form-data">

            <InputGroup
                label="Name"
                type="text"
                name="name"
                onChangeHandler={(e) => { onChangeHandler(e) }}
            />
            <InputGroup
                label="Content"
                type="file"
                name="content"
                onChangeHandler={(e) => { onChangeFile(e) }}
            />
            Create new quetion
            <Button variant="outlined" onClick={() => handelClick("choiseQuestion")} >QCM</Button>
            <Button variant="outlined" onClick={() => handelClick("paragraphBasedQuestion")} >Paragraph</Button>
            <Button variant="outlined" onClick={() => handelClick("synonymAntonym")} >Synonym</Button>


            <QuesToaddTable
                data={quesListe ? quesListe : []} totalData={quesListe.length} columns={columns}
            />


            <div class="row">
                <div class="d-flex justify-content-end" style={{ padding: '0.5rem' }}>
                    <button className="btn btn-primary" type="submit" >Add Course</button>
                </div>
            </div>
            {open && <AddQuestionModal open={open} setOpen={setOpen}
                refreshFornewCourses={refreshFornewCourses} setRefresh={setRefresh}
                questionChoice={questionChoice}
                quesListe={quesListe} setquesListe={setquesListe}
            />}

        </ form>
    )
}