import React, { useEffect, useState } from 'react'
import TestUpdate from '../shared/TestUpdate'
import Sidebar from './Sidebar'
import axios from 'axios'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { any, string } from 'prop-types';
import Select, { SelectChangeEvent } from '@mui/material/Select';




export default function UpdateTest() {

    const {id} = useParams();
    const {idCenter} = useParams();


  const token = localStorage.getItem("token");
  const [admin, setAdmin] = useState('');

  const [colorState, updateState] = useState("")
  let nArry  : string[] = []
  const [updateLagnuages, setUpdateLagnuages] = useState(nArry);
  
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [adminData, setAdminData] = useState([]);
  const [refreshFornewCourses, setRefresh] = useState(false)
  const [testData, setTestData] = useState({});
  const [questionData, setQuestionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [AdminC, setAdminC] = useState("")
  const [fileName, setFileName] = useState("")

  useEffect(() => { 
    
    axios.get(`https://ispeak.api.pfe.anypli.com/api/${idCenter}/test/${id}`, { headers: { Authorization: `${token}` } }).then(res => {
      setTestData(res.data);
      setQuestionData(res.data.question)
      setLoading(false)
    })
  }, [])

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

  const onChangeAdminC = (e: any) => {
    setAdminC(e.target.value);
  };

  const handleLanguages = (e: any) => {
    let newArry  : string[] = []
    newArry = updateLagnuages;
    newArry.push(e.target.value)
    setUpdateLagnuages(newArry);
  };

  const onChangeFile = (e : any) => {
    setFileName(e.target.files[0]);
    
  }

  const onChangeHandler = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };
  
  const navigate = useNavigate();

  const onSubmitHandler2 = (e: any,data:any) => {
     e.preventDefault();
    const formData = new FormData();
     formData.append("firstName", data.firstName)
     formData.append("lastName", data.lastName)
     formData.append("phone", data.phone)
     console.log("====",data.firstName)
    
    axios.put(`https://ispeak.api.pfe.anypli.com/api/user/${id}`, formData, { headers: { Authorization: `${token}`, 'content-type': 'multipart/form-data' }  })
      .then(res => {
        alert('User updated Successfully')
        navigate(`/admin`);
      })
      .catch(err => setErrors(err.response.data))
  }
   useEffect(() => { 
    
    axios.get(`https://ispeak.api.pfe.anypli.com/api/user/${id}`, { headers: { Authorization: `${token}` } }).then(res => {
        console.log("centreDataff",res);
        setAdminData(res.data);
    })
  }, [])

  const handleChange = (event: SelectChangeEvent) => {
    setAdmin(event.target.value as string);
  };

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Update Test</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {}
          </div>
        </div>
        <div className="row p-4">
          <div >
         {loading?
          null
          : <TestUpdate 
          testData={testData} questionData={questionData} refreshFornewCourses={refreshFornewCourses} setRefresh={setRefresh} centerId={idCenter} />
        }
           
          </div>
        </div>
      </main>
    </div>
  )
}