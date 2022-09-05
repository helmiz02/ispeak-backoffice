import React, { useEffect, useState } from 'react'
import AdminUpdate from '../shared/AdminUpdate'
import Sidebar from './Sidebar'
import axios from 'axios'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { any, string } from 'prop-types';
import Select, { SelectChangeEvent } from '@mui/material/Select';




export default function UpdateAdmin() {

    const {id} = useParams();


  const token = localStorage.getItem("token");
  const [admin, setAdmin] = useState('');

  const [colorState, updateState] = useState("")
  let nArry  : string[] = []
  const [updateLagnuages, setUpdateLagnuages] = useState(nArry);
 
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
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
    
     console.log("====",form)
    
    axios.put(`http://localhost:5000/api/user/${id}`, form, { headers: { Authorization: `${token}` }  })
      .then(res => {
        alert('User updated Successfully')
        navigate(`/admin`);
      })
      .catch(err => setErrors(err.response.data))
  }
   useEffect(() => { 
    
    axios.get(`http://localhost:5000/api/user/${id}`, { headers: { Authorization: `${token}` } }).then(res => {
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
          <h1 className="h2">Update Admin</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {
            /* <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              /*<button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div> */}
          </div>
        </div>
        <div className="row p-4">
          <div >

            <AdminUpdate 
            admin={adminData} onSubmit={onSubmitHandler2} onChangeHandler={onChangeHandler} />
          </div>
        </div>
      </main>
    </div>
  )
}