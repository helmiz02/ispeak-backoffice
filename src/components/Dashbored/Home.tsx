import React from 'react'
import Sidebar from './Sidebar'
const logo = require('../../asset/logo.png');

let role = localStorage.getItem("role")

export default function Logo() {
  return (
    <div className="row">
      <Sidebar />

      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Home</h1>

        </div>
        {role ==="superAdmin" ? <>
        <h3 style={{ color: 'red' }}>SUPERADMIN</h3>
        </>
        :role ==="admin" ?<>
        <h3 style={{ color: 'red' }}>ADMIN</h3>
        </>
        :<>
        <h3 style={{ color: 'red' }}>INSTRUCTOR</h3>
        </>}

        <img alt='logo' style={{ width: 250 }} src={String(logo)} />
        <h4 style={{color:'#0071bd'}}>ISPEAK</h4>
      </main>
    </div>

  )
}
