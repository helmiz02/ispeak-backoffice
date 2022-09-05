import React, { useEffect, useState } from 'react'
import CenterCreate from '../shared/CenterCreate'
import Sidebar from './Sidebar'
import axios from 'axios'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { any, string } from 'prop-types';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CreateSession from '../shared/createSession';
import moment from 'moment'


export default function SessionCreate() {
  
  const {idCenter} = useParams();

  
  const token = localStorage.getItem("token");

  const [colorState, updateState] = useState("#FFF")
  let nArry  : string[] = []
  const [form, setForm] = useState({
    beginDate:null,
    endDate:null
  });
  const [errors, setErrors] = useState({});
  const [refreshFornewAdmins, setRefresh] = useState(false)
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [instructor, setInstructor] = useState(''); 
  const [instructorData, setInstructorData] = useState([]);

  useEffect(() => { 
    axios.get(`http://localhost:5000/api/${idCenter}/get-instructor-center/`, { headers: { Authorization: `${token}` } }).then(res => {
      setInstructorData(res.data);
    })
  }, [refreshFornewAdmins])


  const onChange2 = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  const onChange3 = (event: SelectChangeEvent) => {
    setLevel(event.target.value as string);
  };

  const onChange4 = (event: SelectChangeEvent) => {
    setInstructor(event.target.value as string);
  };
  
  const handleInput = (e: any) => {

    updateState(e.target.value);
  };

  

  const onChangeHandler = (e: any) => {
     console.log(e)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };
  const onChangeBeginDate = (e: any) => {
    console.log(moment(e).format("DD-MM-YYYY"))
    setForm({
     ...form,
     ["beginDate"]: e,
   });

 };
 
 const onChangeEndDate = (e: any) => {
   setForm({
   ...form,
   ["endDate"]: e,
 });

};
  const navigate = useNavigate();

  const onSubmitHandler2 = (e: any) => {

    e.preventDefault();
    const newForm:any = form
    newForm.beginDate = form? moment(form.beginDate).format("YYYY-MM-DD") : null;
    newForm.endDate = form? moment(form.endDate).format("YYYY-MM-DD") : null;
    

    
    axios.post( `http://localhost:5000/api/${idCenter}/session/`, form, { headers: { Authorization: `${token}` }  })
      .then(res => {
        alert('Session created Successfully')
        navigate(`/detailsCenterAdmin/${idCenter}`);
      })
      .catch(err => setErrors(err.response.data))

  }

  

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">New Session</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {}
          </div>
        </div>
        <div className="row p-4">
          <div >
            <CreateSession 
            onChangeEndDate={onChangeEndDate}
            form={form}
            onChangeBeginDate={onChangeBeginDate}
            valueLanguage={language} valueLevel={level} valueInstructor={instructor} onChangeHandler={onChangeHandler}  
            onChange={handleInput} onChange2={onChange2} onChange4={onChange4} onChange3={onChange3} 
             onSubmit={onSubmitHandler2} instructor={instructorData}
            refreshFornewAdmins={refreshFornewAdmins} setRefresh={setRefresh} idCenter={idCenter}
            />
          </div>
        </div>
      </main>
    </div>
  )
}