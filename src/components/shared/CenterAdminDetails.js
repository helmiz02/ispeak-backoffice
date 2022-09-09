import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect, useState } from 'react'
import InputGroup from "./InputGroup";
import TablePagination from "@material-ui/core/TablePagination";

export default function CenterAdminDetails({ data, sessionData, columns, testData, columnsTest, idCenter }) {

  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  const token = localStorage.getItem("token");


  const handleClick = () => {
    setOpen(!open);
  };
  var logo = data.logo
  typeof logo === 'string' ? logo = logo.substr(7) : logo = ""

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dataD, setDatad] = React.useState(data);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const OnDetailsTest = (id)=> {
    navigate(`/testDetails/${id}/${idCenter}`);
  }
  const handelClick = (id) => {
    navigate(`/testCreate/${idCenter}`);
  } 
  
  const onUpdateTest = (id) => {
    navigate(`/testUpdate/${id}/${idCenter}`);
  } 

  const onDeleteTest = (id) => {
    
    if(window.confirm("are you sure to delete this test")){
 
      axios.delete(`https://ispeak.api.pfe.anypli.com/api/${idCenter}/test/${id}`, { headers: { Authorization: `${token}` } })
      .then(res=>{
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

  const handelClick2 = (id) => {
    navigate(`/sessionCreate/${idCenter}`);
  }  
  
  const OnDetailsSession = (id)=> {
    navigate(`/detailsSession/${id}/${idCenter}`);
  }

  const onDeleteSession = (id)=> {

    if(window.confirm("are you sure to delete this session")){
 
      axios.delete(`https://ispeak.api.pfe.anypli.com/api/${idCenter}/session/${id}`, { headers: { Authorization: `${token}` } })
      .then(res=>{
       setMessage(res.data.message)
       setShow(true)
       setTimeout(() => {
         setShow(false)
       }, 4000);

       window.location.reload(false);
      })
      //navigate(`/center`);
      //window.location.reload(false);
      //navigate(`/detailsCenterAdmin/${idCenter}`);
     }
  } 
  
  const onUpdateSession = (id)=> {
    navigate(`/sessionUpdate/${id}/${idCenter}`);
  }

  return (

    <div className="row p-4">
      <div className="col-12 col-lg-5">
      <div class="row">
          <div class="col">
            <img
              src={
                "https://ispeak.api.pfe.anypli.com/" + logo
              }
              alt="logocentre"
              style={{ width: 150 }}
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
          <h4 style={{color:data.color1}} >{data.name}</h4>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5">
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}} >ID</div>
          <div class="col" style={{color: '#0071bd'}}>
            {data._id}
          </div>
        </div>
        <div class="row"style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}} >PHONE</div>
          <div class="col" style={{color: '#0071bd'}}>
            {data.phone}
          </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}}>EMAIL</div>
          <div class="col" style={{color: '#0071bd'}}>
            {data.email}
          </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}}>Color</div>
          <div class="col">
            <div style={{ background: data.color1, color: "#FFFFFF" }}>
              {data.color1}
            </div>
          </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}}>Language</div>
          <div class="col">
            <div> 
              { data.language?.map((item) => (
                <Chip label={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div class="container" style={{padding: '0.5rem'}} >
        <div class="row">
          <div class="col-md-auto">
            <h4 style={{ textAlign: 'left', padding: '0.5rem' }} > Test : </h4>
          </div>
          <div class="col-md-auto" style={{ padding: '0.5rem' }}>
            <Button style={{color:"#1976d2"}} onClick={() => handelClick()} >Create Test</Button>
          </div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columnsTest.map((row) => (
                <TableCell align="left">{row.label} </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {testData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.language}</TableCell>
                <TableCell align="left">
                  <Button style={{color:"#9c27b0"}} onClick={() => OnDetailsTest(row._id)} >Details</Button>
                  <Button style={{color:"rgb(25,118,210)"}} onClick={() => onUpdateTest(row._id)} >Update</Button>
                  <Button style={{color:"rgb(211,47,47)"}} onClick={() => onDeleteTest(row._id)} >Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div class="container" style={{padding: '0.5rem'}}  >
        <div class="row">
          <div class="col-md-auto">
            <h4> Session : </h4>
          </div>
          <div class="col-md-auto">
            <Button style={{color:"#1976d2"}} onClick={() => handelClick2()} >Create Session</Button>
          </div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((row) => (
                <TableCell align="left">{row.label} </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sessionData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.beginDate.substring(0,10)}</TableCell>
                <TableCell align="left">{row.endDate.substring(0,10)}</TableCell>
                <TableCell align="left">{row.level}</TableCell>
                <TableCell align="left">{row.language}</TableCell>
                <TableCell align="left">{row.instructor.firstName + " " + row.instructor.lastName}</TableCell>
                <TableCell align="left"> 
                <Button style={{color:"#9c27b0"}} onClick={() => OnDetailsSession(row._id)} >Details</Button>
                  <Button style={{color:"rgb(25,118,210)"}} onClick={() => onUpdateSession(row._id)} >Update</Button>
                  <Button style={{color:"rgb(211,47,47)"}} onClick={() => onDeleteSession(row._id)} >Delete</Button>
                </TableCell>
              </TableRow>
            )).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>

  );
}


