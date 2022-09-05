import React, { useEffect, useState } from 'react'
import DataTable from '../shared/DataTable'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { any } from 'prop-types';
import CenterDetails from '../shared/CenterDetails';
import Button from '@mui/material/Button';
import CenterAdminDetails from '../shared/CenterAdminDetails';



export default function DetailsCenterAdmin() {

  const {id} = useParams();
    
  const [centreData, setCentreData] = useState({});
  const token = localStorage.getItem("token"); 
  const [testData, setTestData] = useState([]);
  const [sessionData, setSessionData] = useState([]);


  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'beginDate', label: 'Begin Date', minWidth: 170 },
    { id: 'endDate', label: 'End Date', minWidth: 170 },
    { id: 'level', label: 'Level', minWidth: 170 },
    { id: 'language', label: 'Language ', minWidth: 170 },
    { id: 'instructor', label: 'Instructor ', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 },
  ];

  const columnsTest = [
        
    { id: 'language', label: 'Language ', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 },
];

  useEffect(() => { 
    
    axios.get(`http://localhost:5000/api/${id}/center/`, { headers: { Authorization: `${token}` } }).then(res => {
      setCentreData(res.data)
    })
  }, []) 

  useEffect(() => { 
    
    axios.get(`http://localhost:5000/api/${id}/sessions/`, { headers: { Authorization: `${token}` } }).then(res => {
      setSessionData(res.data)
    })
  }, [])

  useEffect(() => {//https://ispeak.api.pfe.anypli.com/

    axios.get(`http://localhost:5000/api/${id}/tests/`, { headers: { Authorization: `${token}` } }).then(res => {
        setTestData(res.data)
    })
}, [])

  const navigate = useNavigate();
  const onclick = () =>  {
    navigate(`/instructor/${id}`);
  } 
  const onclick2 = () =>  {
    navigate(`/learner/${id}`);
  }
  
  
  
  return (
    
    <div className="row">
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">My Center Details</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {
            <div className="btn-group me-2">
              <Button variant="outlined"   onClick={()=>onclick()} >INSTRUCTOR LIST</Button>
              <Button variant="outlined"   onClick={()=>onclick2()} >LEARNER LIST</Button>
            </div>
             }
          </div>  
        </div>
        < CenterAdminDetails data={centreData} sessionData={sessionData} columns={columns} testData={testData} columnsTest={columnsTest} idCenter={id}/>
      </main>
    </div>
  )
}