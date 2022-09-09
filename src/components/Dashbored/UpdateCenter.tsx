import React, { useEffect, useState } from 'react'
import CenterUpdate from '../shared/CenterUpdate'
import Sidebar from './Sidebar'
import axios from 'axios'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { any, string } from 'prop-types';
import Select, { SelectChangeEvent } from '@mui/material/Select';




export default function UpdateCenter() {

    const {id} = useParams();

  const [centreData, setCentreData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const token = localStorage.getItem("token");
  const [admin, setAdmin] = useState('');

  const [colorState, updateState] = useState("")
  let nArry  : string[] = []
  const [updateLagnuages, setUpdateLagnuages] = useState(nArry);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [refreshFornewAdmins, setRefresh] = useState(false)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [AdminC, setAdminC] = useState("")
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
     console.log(data)
     var ad = JSON.stringify(data.admin);

    const formData = new FormData();
     formData.append("color1", data.color1)
     formData.append("logo", data.logo)
     formData.append("name", data.name)
     formData.append("phone", data.phone)
     formData.append("email", data.email)
     formData.append("admin", data.admin._id)
     for (var i = 0; i < data.language.length; i++) {
      formData.append("language", data.language[i])
    }
     
     
     
    //let newCenter = { ...form, color1: colorState, language: updateLagnuages, logo}

    console.log(formData);
    
    axios.put(`https://ispeak.api.pfe.anypli.com/api/center/${id}`, formData, { headers: { Authorization: `${token}`, 'content-type': 'multipart/form-data' }  })
      .then(res => {
        alert('Center updated Successfully')
        navigate(`/center`);
      })
      .catch(err => setErrors(err.response.data))
  }
   useEffect(() => { 
    
    axios.get(`https://ispeak.api.pfe.anypli.com/api/${id}/center/`, { headers: { Authorization: `${token}` } }).then(res => {
        setCentreData(res.data);
        updateState(res.data.color1);
    })
  }, [])

  useEffect(() => {
    axios.get("https://ispeak.api.pfe.anypli.com/api/get-admin", { headers: { Authorization: `${token}` } }).then(res => {
      setAdminData(res.data);
    })
  }, [refreshFornewAdmins])

  const columns = [
    { id: 'logo', label: 'Logo', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'language', label: 'Language', minWidth: 170 },
    { id: 'color1', label: 'Color 1', minWidth: 170 },
    { id: 'color2', label: 'Color 2', minWidth: 170 },
    { id: 'color3', label: 'Color 3', minWidth: 170 },
    { id: 'admin', label: 'Admin', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 },
  ];


  const handleChange = (event: SelectChangeEvent) => {
    setAdmin(event.target.value as string);
  };

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Update Center</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {}
          </div>
        </div>
        <div className="row p-4">
          <div >

            <CenterUpdate handleLanguages={handleLanguages} value={colorState} 
            onChange={handleInput} valueAdmin={admin} onChange2={handleChange} 
            admin={adminData} onChangeHandler={onChangeHandler} onSubmit={onSubmitHandler2}
            refreshFornewAdmins={refreshFornewAdmins} setRefresh={setRefresh} onChangeFile={onChangeFile}
            onChangeName={onChangeName} onChangePhone={onChangePhone} onChangeEmail={onChangeEmail} onChangeAdminC={onChangeAdminC} 
            centreData={centreData}/>
          </div>
        </div>
      </main>
    </div>
  )
}