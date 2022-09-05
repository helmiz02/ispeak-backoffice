import React, { useState } from "react"
import InputGroup from "./InputGroup2";
import Button from '@mui/material/Button';
import AddQuestionModal from "./addQuestionModal";
import QuesToaddTable from "./quesToaddTable";
import axios from 'axios'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function CreateTest({ valueLanguage, refreshFornewCourses, setRefresh, onChange2, onChangeLanguage, onChangeHandler2, centerId }) {


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
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'content', label: 'Content', minWidth: 170 },
        { id: 'choice', label: 'Choice', minWidth: 170 },
        { id: 'keywords', label: 'keywords ', minWidth: 170 },
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
        return newArry
    }

    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
        console.log(e.target.files[0])
    }
    const onSubmitHandler = async (e) => {

        e.preventDefault();

        const questionl = await refacturingArrIDS()
        //form.question = question
        form.language = valueLanguage
        form.question = questionl

        console.log("DDDD", form);

        /*const formData = new FormData();
        formData.append("name", name)
        for (var i = 0; i < questionl.length; i++) {
            formData.append("question", questionl[i])
        }
        formData.append("content", fileName)*/

        axios.post(`http://localhost:5000/api/${centerId}/test`, form, { headers: { Authorization: `${token}` } })
            .then(res => {


            })
            .catch(err => setErrors(err.response.data))

    }
    return (
        <form onSubmit={onSubmitHandler} >


            <div class="row">
                <div class="col" style={{ padding: '0.5rem' }}>
                    <label for="Email" className="form-label" >language</label>
                </div>

                <div class="col" style={{ padding: '0.5rem' }}>
                    <Select

                        labelId="Language"
                        id="Language"
                        value={valueLanguage}
                        label="Language"
                        name="language"
                        fullWidth
                        onChange={(e) => { onChange2(e); onChangeHandler2(e); onChangeLanguage(e) }}
                    >
                        <MenuItem value="french">French</MenuItem>
                        <MenuItem value="english">English</MenuItem>
                    </Select>
                </div>
            </div>

            <div class="row">
                <div class="col" style={{ padding: '0.5rem' }}>
                    <label for="Email" className="form-label" >Questions</label>
                </div>
                <div class="col" style={{ padding: '0.5rem' }}>
                    <Button variant="outlined" onClick={() => handelClick("choiseQuestion")} >Create</Button>
                </div>
            </div>

            <QuesToaddTable
                data={quesListe ? quesListe : []} totalData={quesListe.length} columns={columns} centerId={centerId}
            />


            <div class="row">
                <div class="d-flex justify-content-end" style={{ padding: '0.5rem' }}>
                    <button className="btn btn-primary" type="submit" >Add Test</button>
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