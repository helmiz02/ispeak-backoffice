import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import SessionDetails from '../shared/SessionDetails';
import TestDetails from '../shared/TestDetails';
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from 'moment'


export default function CenterDetails({ data, columnsCourse, admin, course, idCenter }) {

  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  const token = localStorage.getItem("token");

  var logo = data.logo
  typeof logo === 'string' ? logo = logo.substr(7) : logo = ""

  const handelClick = (id) => {
    navigate(`/courseDetails/${id}/${idCenter}`);
  }

  const onDelete = (id) => {
    if (window.confirm("are you sure to delete this course")) {

        axios.delete(`https://ispeak.api.pfe.anypli.com/api/${idCenter}/course/${id}/${data._id}`, { headers: { Authorization: `${token}` } })
          .then(res => {
            setMessage(res.data.message)
            setShow(true)
            setTimeout(() => {
              setShow(false)
            }, 4000);
          })
        window.location.reload(false);
      }
}

  const OnUpdate = (id) => {
    //navigate(`/courseDetails/${id}/${idCenter}/`);
  }
  const handelClick2 = (id) => {
    navigate(`/createcourse/${data._id}/${idCenter}`);
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
          <div class="col" style={{ textAlign: 'left' }}>Name</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data.name}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>Begin Date</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {moment(data.beginDate).format("YYYY-MM-DD")}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>End Date</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {moment(data.endDate).format("YYYY-MM-DD")}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>Level</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data.level}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>Language</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data.language}
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5">
        <div>
          <h4> Instructor : </h4>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>First Name</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {admin.firstName}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>Last Name</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {admin.lastName}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>Phone</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {admin.phone}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }}>Email</div>
          <div class="col" style={{ color: '#0071bd' }}>
            {admin.email}
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-auto" >
          <h4 style={{ textAlign: 'left', padding: '0.5rem' }}> Course : </h4>
        </div>
        <div class="col-md-auto" style={{ padding: '0.5rem' }}>
          <Button onClick={() => handelClick2()} >Create course</Button>
        </div>
      </div>
      <div class="row" style={{ padding: '0.5rem' }}>
        <div class="col">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columnsCourse.map((row) => (
                    <TableCell align="left">{row.label} </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {course.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row._id}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">
                      <div ><Button color="secondary" onClick={() => handelClick(row._id)} >Details</Button></div>
                      <div ><Button color="error" onClick={() => onDelete(row._id)} >Delete</Button></div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}