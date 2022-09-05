import React, { useEffect, useState } from 'react'
import InstructorSuperAdminTable from '../shared/InstructorSuperAdmin'
import Sidebar from './Sidebar'
import axios from 'axios'

export default function InstructorSuperAdmin() {

  const [adminData, setAdminData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {

    axios.get("http://localhost:5000/api/get-instructor", { headers: { Authorization: `${token}` } }).then(res => {
      setAdminData(res.data);
      setTotalData(res.data.count);
    })
  }, [])

  const columns = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'firstName', label: 'First Name', minWidth: 170 },
    { id: 'lastName', label: 'Last Name', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 170 },
    { id: 'language', label: 'Language', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 },
  ];
  console.log(adminData, totalData);

  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Instructors</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            {}
          </div>
        </div>
        <div className="table-responsive">
          <InstructorSuperAdminTable
            data={adminData} columns={columns}
          />
        </div>

      </main>
    </div>
  )
}