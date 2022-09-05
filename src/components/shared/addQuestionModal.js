import React, { useState } from 'react';

import Modal from '@mui/material/Modal';
import axios from 'axios'
import Button from '@mui/material/Button';
import InputGroup from "./InputGroup2";

import { Box } from '@mui/material';
const style = {
    position: 'absolute',
    top: '0%',
    left: '25%',
    //   transform: 'translate(0%, -25%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '1px solid #000',

    p: 4,
};

export default function AddQuestionModal({ open, setOpen, refreshFornewCourses, setRefresh, questionChoice, quesListe, setquesListe }) {

    const [form, setForm] = useState({});
    const [choice, setChoice] = useState({});
    const [keywords, setkeywords] = useState({});
    const token = localStorage.getItem("token");

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setOpen(false);

    const onSubmitHandler = async (e) => {
        const choiceArray = await refacturingArrChoice()
        const keywordsArray = await refacturingArrkeys()
        form.type = questionChoice
        form.choice = choiceArray
        form.keywords = keywordsArray
        console.log(form);
        if (quesListe.length < 10)
            axios.post('http://localhost:5000/api/628f7b8cddfc7db7168acb23/question', form, { headers: { Authorization: `${token}` } })
                .then(res => {
                    console.log([...quesListe, res.data])
                    setMessage()
                    /* hide form after save */
                    setForm({})
                    /* hide errors after save */
                    setErrors({})
                    setShow(true)
                    setquesListe([...quesListe, res.data])
                    setRefresh(!refreshFornewCourses)
                    handleClose()
                    setTimeout(() => {
                        setShow(false)
                    }, 4000);
                })
                .catch(err => setErrors(err.response.data))

        else alert("t'as le droit d'ajouter seulement 10 questions")

    }

    const onChangeHandler = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const onChangeHandlerChoice = (e) => {

        setChoice({
            ...choice,
            [e.target.name]: e.target.value,
        });


    };
    const onChangeHandlerKeywords = (e) => {

        setkeywords({
            ...keywords,
            [e.target.name]: e.target.value,
        });


    };

    const refacturingArrChoice = () => {
        let newArry = []
        Object.keys(choice).forEach(function (key, index) {
            newArry.push(choice[key]);
        });
        // setchoiceArray(newArry);
        return newArry

    }

    const refacturingArrkeys = () => {
        let newArry = []
        Object.keys(keywords).forEach(function (key, index) {
            newArry.push(keywords[key]);
        });
        return newArry


    }

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>

                    <h4>Create Question</h4>


                    <div style={{ display: questionChoice === "choiseQuestion" ? "block" : "none" }}> {questionChoice}
                        <div className="col-12 ">

                            <InputGroup
                                label="Name"
                                type="text"
                                name="name"
                                onChangeHandler={(e) => onChangeHandler(e)}


                            />
                            <InputGroup
                                label="Content"
                                type="text"
                                name="content"
                                onChangeHandler={(e) => onChangeHandler(e)}

                            />
                            Choices:      <InputGroup
                                label="Choice 1"
                                type="text"
                                name="choice1"
                                onChangeHandler={(e) => onChangeHandlerChoice(e)}

                            />     <InputGroup
                                label="Choice 2"
                                type="text"
                                name="choice2"

                                onChangeHandler={(e) => onChangeHandlerChoice(e)}

                            />     <InputGroup
                                label="Choice 3"
                                type="text"
                                name="choice3"
                                onChangeHandler={(e) => onChangeHandlerChoice(e)}

                            />

                            Keywords:      <InputGroup
                                label="Keywords 1"
                                type="text"
                                name="Keywords1"
                                onChangeHandler={(e) => onChangeHandlerKeywords(e)}

                            />
                            <button className="btn btn-primary" type="submit" onClick={() => onSubmitHandler()}>Add Question</button>
                            <button style={{ marginLeft: 8 }} className="btn btn-primary" onClick={() => handleClose()}>Cancel</button>

                        </div>
                    </div>
                    <div style={{ display: questionChoice === "paragraphBasedQuestion" ? "block" : "none" }}> {questionChoice}
                        <div className="col-12 ">

                            <InputGroup
                                label="Name"
                                type="text"
                                name="name"
                                onChangeHandler={(e) => onChangeHandler(e)}


                            />
                            <InputGroup
                                label="Content"
                                type="text"
                                name="content"
                                onChangeHandler={(e) => onChangeHandler(e)}

                            />

                            Keywords:      <InputGroup
                                label="Keywords 1"
                                type="text"
                                name="Keywords1"
                                onChangeHandler={(e) => onChangeHandlerKeywords(e)}

                            />
                            <InputGroup
                                label="Keywords 2"
                                type="text"
                                name="Keywords2"
                                onChangeHandler={(e) => onChangeHandlerKeywords(e)}

                            />
                            <InputGroup
                                label="Keywords 3"
                                type="text"
                                name="Keywords3"
                                onChangeHandler={(e) => onChangeHandlerKeywords(e)}

                            />
                            <button className="btn btn-primary" type="submit" onClick={() => onSubmitHandler()}>Add Question</button>
                            <button style={{ marginLeft: 8 }} className="btn btn-primary" onClick={() => handleClose()}>Cancel</button>

                        </div>

                    </div>
                    <div style={{ display: questionChoice === "synonymAntonym" ? "block" : "none" }}> {questionChoice}
                        <div className="col-12 ">

                            <InputGroup
                                label="Name"
                                type="text"
                                name="name"
                                onChangeHandler={(e) => onChangeHandler(e)}


                            />
                            <InputGroup
                                label="Content"
                                type="text"
                                name="content"
                                onChangeHandler={(e) => onChangeHandler(e)}

                            />
                            
                            Choices:      <InputGroup
                                label="Choice 1"
                                type="text"
                                name="choice1"
                                onChangeHandler={(e) => onChangeHandlerChoice(e)}

                            />

                            Keywords:      <InputGroup
                                label="Keywords 1"
                                type="text"
                                name="Keywords1"
                                onChangeHandler={(e) => onChangeHandlerKeywords(e)}

                            />
                            <button className="btn btn-primary" type="submit" onClick={() => onSubmitHandler()}>Add Question</button>
                            <button style={{ marginLeft: 8 }} className="btn btn-primary" onClick={() => handleClose()}>Cancel</button>

                        </div>

                    </div>

                </Box>
            </Modal>
        </div>
    );
}
