import React, { useEffect, useState } from 'react'
import AdminTable from '../shared/AdminTable'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import LearnerAdminTable from '../shared/LearnerAdminTable';

export default function Admin() {

  const {id} = useParams();

  const [adminData, setAdminData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const token = localStorage.getItem("token");
 
  useEffect(() => { 
  //https://ispeak.api.pfe.anypli.com/api/get-instructor
    axios.get(`https://ispeak.api.pfe.anypli.com/api/${id}/get-learner-center/`, { headers: { Authorization: `${token}` } }).then(res => {
      setAdminData(res.data);
      setTotalData(res.data.count);
    })
  }, [])

  const navigate = useNavigate();

  const handelClick= () =>  {
    navigate(`/createCenter`);
  }

  const columns = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'firstName', label: 'First Name', minWidth: 170 },
    { id: 'lastName', label: 'Last Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 170 },
    { id: 'action', label: 'Action', minWidth: 170 },
  ];
  console.log(adminData, totalData);

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Learner</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {
            /* <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div> */}
          </div>
        </div>
        <div className="table-responsive">
          <LearnerAdminTable
            data={adminData} totalData={totalData} columns={columns} idCenter={id}
          />
        </div>

      </main>
    </div>
  )
}