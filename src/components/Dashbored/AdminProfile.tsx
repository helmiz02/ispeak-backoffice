import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import ProfileAdmin from '../shared/ProfileAdmin';



export default function AdminProfile() {

  const [userData, setUserData] = useState({});
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  useEffect(() => {

    axios.get(`http://localhost:5000/api/63150cefa4b149bae87b07ce/get-user-by-id/${id}`, { headers: { Authorization: `${token}` } }).then(res => {
      setUserData(res.data)
    })
  }, [])

  return (

    <div className="row">
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Profile</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            { }
          </div>
        </div>
        < ProfileAdmin data={userData} />
      </main>
    </div>
  )
}
