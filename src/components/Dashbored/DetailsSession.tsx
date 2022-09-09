import React, { useEffect, useState } from 'react'
import DataTable from '../shared/DataTable'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { any } from 'prop-types';
import CenterDetails from '../shared/CenterDetails';
import Button from '@mui/material/Button';
import SessionDetails from '../shared/SessionDetails';
import Instructor from './Instructor';



export default function DetailsSession() {

  const {id} = useParams();
  const {idCenter} = useParams();
    
  const [centreData, setCentreData] = useState({});
  const [centreAdmin, setCentreAdmin] = useState({});
  const [titleData, setTitleData] = useState({});
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [course, setCourse] = useState([]);
  
  const columnsCourse = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'actions', label: 'Actions ', minWidth: 170 }
  ];
  useEffect(() => { 
    
    axios.get(`https://ispeak.api.pfe.anypli.com/api/${idCenter}/session/${id}`, { headers: { Authorization: `${token}` } }).then(res => {
      setCentreData(res.data);
      setCentreAdmin(res.data.instructor);
      setCourse(res.data.course);
      setTitleData(res.data.name)
    })
  }, [])

  const navigate = useNavigate();

  const OnDelete = ()=>{
    if(window.confirm("are you sure to delete this session")){
 
     axios.delete(`https://ispeak.api.pfe.anypli.com/api/${idCenter}/session/${id}`, { headers: { Authorization: `${token}` } })
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
  const OnChat = () =>  {
    //navigate(`/chat/${id}`);
  } 

  const OnContact = () =>  {
    navigate(`/learnerSession/${id}`);
  }

  return (
    
    <div className="row">
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Session Details</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {
            <div className="btn-group me-2">
              <Button variant="outlined"   onClick={()=>OnContact()} >Learner</Button>
            </div>
             }
          </div>  
        </div>
        < SessionDetails data={centreData} columnsCourse={columnsCourse} admin={centreAdmin} course={course} idCenter={idCenter} />
      </main>
    </div>
  )
}
