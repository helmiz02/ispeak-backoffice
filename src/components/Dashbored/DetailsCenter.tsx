import React, { useEffect, useState } from 'react'
import DataTable from '../shared/DataTable'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { any } from 'prop-types';
import CenterDetails from '../shared/CenterDetails';
import Button from '@mui/material/Button';


export default function DetailsCenter() {

  const {id} = useParams();
  console.log("detailes",id);
    
  const [centreData, setCentreData] = useState({});
  const [centreAdmin, setCentreAdmin] = useState({});
  const [titleData, setTitleData] = useState({});
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => { 
    
    axios.get(`http://localhost:5000/api/${id}/center/`, { headers: { Authorization: `${token}` } }).then(res => {
      setCentreData(res.data);
      setCentreAdmin(res.data.admin);
      setTitleData(res.data.name)
    })
  }, [])

  const navigate = useNavigate();

  const OnDelete = ()=>{
    if(window.confirm("are you sure to delete this center")){
 
     axios.delete(`http://localhost:5000/api/center/${id}`, { headers: { Authorization: `${token}` } })
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
     navigate(`/center`);
    }
   }

  const OnUpdate = () =>  {
    navigate(`/UpdateCenter/${id}`);
  }
  
  
  return (
    
    <div className="row">
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Center Details</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {
            <div className="btn-group me-2">
              <Button variant="outlined"   onClick={()=>OnUpdate()} >Update center</Button>
              <Button variant="outlined" color="error" onClick={()=>OnDelete()}  >Delete center</Button>
            </div>
             }
          </div>  
        </div>
        < CenterDetails data={centreData} admin={centreAdmin} />
      </main>
    </div>
  )
}
