import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InputGroup from "./InputGroup2";
import { Input } from '@mui/material';
import TextField from '@mui/material/TextField';


export default function ProfileAdmin({ data }) {

  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.put(`https://ispeak.api.pfe.anypli.com/api/63150cefa4b149bae87b07ce/user/password/${data._id}`, form, { headers: { Authorization: `${token}` } })
      .then(res => {
        setMessage(res.data.message)
        /* hide form after save */
        setForm({})
        /* hide errors after save */
        setErrors({})
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 4000);
        if (window.confirm("are you sure to delete this center")) {
          window.location.reload(false);
        }
      })
      .catch(err => setErrors(err.response.data))

  }

  const token = localStorage.getItem("token");

  var logo = data.logo
  typeof logo === 'string' ? logo = logo.substr(7) : logo = ""

  const [passwordData, setPasswordData] = React.useState();


  const OnDelete = (id) => {
    if (window.confirm("are you sure to delete this center")) {

      axios.delete(`https://ispeak.api.pfe.anypli.com/api/center/${id}`, { headers: { Authorization: `${token}` } })
        .then(res => {
          setMessage(res.data.message)
          setShow(true)
          setTimeout(() => {
            setShow(false)
          }, 4000);
        })
      //navigate(`/center`);
      window.location.reload(false);
    }
  }

  const OnUpdate = (id) => {
    //navigate(`/courseDetails/${id}/${idCenter}/`);
  }


  return (

    <div className="row p-4">
      <div className="col-12 col-lg-5">
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>ID</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data._id}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>First Name</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data.firstName}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>Last Name</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data.lastName}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>Phone</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data.phone}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>Email</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data.email}
          </div>
        </div>
      


      <form onSubmit={onSubmitHandler} >

        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }} >
            <InputGroup 
              label="Password"
              type="text"
              name="password"
              onChangeHandler={onChangeHandler}
            />
            </div>
            
        </div>
        <div >
            <button className="btn btn-primary" type="submit">Update password</button>
            </div>
      </form>
      </div>
    </div>

  );
}