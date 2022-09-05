import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import TestDetails from '../shared/TestDetails';
import CourseDetails from '../shared/CourseDetails';

export default function DetailsTest() {

  const {id} = useParams();
  const {centerId} = useParams();
    
  const [courseData, setCourseData] = useState({});
  const [questionData, setQuestionData] = useState([]);
  const [titleData, setTitleData] = useState({});
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => { 
    
    axios.get(`http://localhost:5000/api/${centerId}/course/${id}`, { headers: { Authorization: `${token}` } }).then(res => {
      setCourseData(res.data);
      setQuestionData(res.data.question)      
    })
  }, [])
  
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
          <h1 className="h2">Course Details</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {}
          </div>  
        </div>
        < CourseDetails data={courseData} columnsQuestion={columnsQuestion}
           questionData={questionData} />
      </main>
    </div>
  )
}
