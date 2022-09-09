import React, { useEffect, useState } from 'react'
import CenterCreate from '../shared/CenterCreate'
import Sidebar from './Sidebar'
import axios from 'axios'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { any, string } from 'prop-types';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CenterAdminTable from '../shared/CenterAdminTable';




export default function CenterAdmin() {
    

  const [centreData, setCentreData] = useState([]);
  const [totalData, setTotalData] = useState(0);

  const token = localStorage.getItem("token"); 
  const id = localStorage.getItem("id");
  let nArry  : string[] = []
  const [updateLagnuages, setUpdateLagnuages] = useState(nArry);
  const [form, setForm] = useState({});
 

  const handleLanguages = (e: any) => {
    let newArry  : string[] = []
    newArry = updateLagnuages;
    newArry.push(e.target.value)
    setUpdateLagnuages(newArry);
  };

  const onChangeHandler = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };
  
  const navigate = useNavigate();

      //https://ispeak.api.pfe.anypli.com/
      useEffect(() => {
        axios.get(`https://ispeak.api.pfe.anypli.com/api/center-admin/${id}`, { headers: { Authorization: `${token}` } }).then(res => {
          setCentreData(res.data); 
        })
      }, [])  

      const columns = [
        { id: 'logo', label: 'Logo', minWidth: 170 },
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'phone', label: 'Phone', minWidth: 170 },
        { id: 'email', label: 'Email', minWidth: 170 },
        { id: 'language', label: 'Language', minWidth: 170 },
        { id: 'color', label: 'Color ', minWidth: 170 },
        { id: 'actions', label: 'Actions', minWidth: 170 },
      ];



  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Center</h1>
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
          <CenterAdminTable
              data={centreData} totalData={totalData} columns={columns}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
