import React, { useEffect, useState } from 'react'
import DataTable from '../shared/DataTable'
import Sidebar from './Sidebar'
import axios from 'axios'
import Button from '@mui/material/Button';
import {Routes, Route, useNavigate} from 'react-router-dom';



export default function Center() {

  const [centreData, setCentreData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("https://ispeak.api.pfe.anypli.com/api/all-centers/", { headers: { Authorization: `${token}` } }).then(res => {
      setCentreData(res.data.centers);
      setTotalData(res.data.count);
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
  console.log(centreData, totalData);
  const navigate = useNavigate();

  const handelClick= () =>  {
    navigate(`/createCenter`);
  }

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Centers</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {
            <Button variant="outlined" style={{color:"#1976d2"}} onClick={()=>handelClick()} >New center</Button>
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
        
          
          <div className="table-responsive">
            <DataTable
              data={centreData} totalData={totalData} columns={columns}
            />
          
        </div>

      </main>
    </div>
  )
}
