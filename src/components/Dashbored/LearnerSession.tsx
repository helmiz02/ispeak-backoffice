import React, { useEffect, useState } from 'react'
import LearnerSessionTable from '../shared/LearnerSessionTable'
import Sidebar from './Sidebar'
import axios from 'axios'
import {useParams} from 'react-router-dom';

export default function LearnerSession() {

  const {id} = useParams();

  const [learnerList, setLearnerList] = useState([]);
  const token = localStorage.getItem("token");
 
  useEffect(() => { 
  //http://localhost:5000/api/get-instructor
    axios.get(`http://localhost:5000/api/getLearnerBySession/${id}`, { headers: { Authorization: `${token}` } }).then(res => {
      setLearnerList(res.data);
    })
  }, [])


  const columns = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'firstName', label: 'First Name', minWidth: 170 },
    { id: 'lastName', label: 'Last Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 170 },
    { id: 'action', label: 'Action', minWidth: 170 },
  ];
  

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Learner in the session</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {}
          </div>
        </div>
        <div className="table-responsive">
          <LearnerSessionTable
            data={learnerList} columns={columns} 
          />
        </div>

      </main>
    </div>
  )
}