import React, { useEffect, useState } from 'react'
import CenterCreate from '../shared/CenterCreate'
import Sidebar from './Sidebar'
import axios from 'axios'
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { any, string } from 'prop-types';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CreateTest from '../shared/CreateTest';



export default function TestCreate() {
  
  const {idCenter} = useParams();
  
  
  

  const [centreData, setCentreData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const token = localStorage.getItem("token");
  const [language, setLanguage] = useState('');

  const [colorState, updateState] = useState("#FFF")
  let nArry  : string[] = []
  const [updateLagnuages, setUpdateLagnuages] = useState(nArry);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [refreshFornewCourses,setRefresh]= useState(false)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [AdminC, setLanguageC] = useState("")
  const [fileName, setFileName] = useState("")

  
  
  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onChangePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  //color
  const handleInput = (e: any) => {

    updateState(e.target.value);
  };

  
  const handleLanguages = (e: any) => {
    let newArry  : string[] = []
    newArry = updateLagnuages;
    newArry.push(e.target.value)
    setUpdateLagnuages(newArry);
  };

  
  
  const navigate = useNavigate();

  const onChangeLanguage = (e: any) => {
    setLanguageC(e.target.value);
  };

  const onChange2 = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  const onChangeHandler2 = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">New Test</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {}
          </div>
        </div>
        <div className="row p-4">
          <div >
            <CreateTest  
            refreshFornewCourses={refreshFornewCourses} setRefresh={setRefresh} onChange2={onChange2} onChangeLanguage={onChangeLanguage} onChangeHandler2={onChangeHandler2 }  valueLanguage={language} centerId={idCenter}
            />
          </div>
        </div>
      </main>
    </div>
  )
}