import React, { useEffect, useState } from 'react'
import DataTable from '../shared/DataTable'
import Sidebar from './Sidebar'
import axios from 'axios'
import Button from '@mui/material/Button';
import {Routes, Route, useNavigate} from 'react-router-dom';
import SessionTable from '../shared/Session';



export default function Session() {

  const [centreData, setCentreData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {//https://ispeak.api.pfe.anypli.com/

    axios.get("https://ispeak.api.pfe.anypli.com/api/628f7b8cddfc7db7168acb23/sessions/", { headers: { Authorization: `${token}` } }).then(res => {
      setCentreData(res.data);
      setTotalData(res.data.count);
    })
  }, [])

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'beginDate', label: 'Begin Date', minWidth: 170 },
    { id: 'endDate', label: 'End Date', minWidth: 170 },
    { id: 'level', label: 'Level', minWidth: 170 },
    { id: 'language', label: 'Language ', minWidth: 170 },
    { id: 'instructor', label: 'Instructor ', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 },
  ];
  console.log(centreData, totalData);
  const navigate = useNavigate();

  const handelClick= () =>  {
    navigate(`/createSession`);
  }

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Center</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {
            <Button variant="outlined" onClick={()=>handelClick()} >Create new session</Button>
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
            <SessionTable
              data={centreData} totalData={totalData} columns={columns}
            />
          
        </div>

      </main>
    </div>
  )
}
