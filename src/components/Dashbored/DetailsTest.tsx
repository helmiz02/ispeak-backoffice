import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import SessionDetails from '../shared/SessionDetails';
import TestDetails from '../shared/TestDetails';

export default function DetailsTest() {

  const {id} = useParams();
  const {centerId} = useParams();
    
  const [testData, setTestData] = useState({});
  const [questionData, setQuestionData] = useState([]);
  const [titleData, setTitleData] = useState({});
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => { 
    
    axios.get(`https://ispeak.api.pfe.anypli.com/api/${centerId}/test/${id}`, { headers: { Authorization: `${token}` } }).then(res => {
      setTestData(res.data);
      setQuestionData(res.data.question)      
    })
  }, [])

  const navigate = useNavigate();

  const OnDelete = ()=>{
    if(window.confirm("are you sure to delete this session")){
 
     axios.delete(`https://ispeak.api.pfe.anypli.com/api/628f7b8cddfc7db7168acb23/session/${id}`, { headers: { Authorization: `${token}` } })
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

  
  const columnsQuestion = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'content', label: 'Content', minWidth: 170 },
    { id: 'choice', label: 'Choice', minWidth: 170 },
    { id: 'keywords', label: 'keywords ', minWidth: 170 }
  ];
  
  
  
  return (
    
    <div className="row">
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Test Details</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {}
          </div>  
        </div>
        < TestDetails data={testData} columnsQuestion={columnsQuestion}
           questionData={questionData} />
      </main>
    </div>
  )
}
