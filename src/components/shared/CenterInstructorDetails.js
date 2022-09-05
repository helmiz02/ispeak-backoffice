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

import InputGroup from "./InputGroup";

export default function CenterInstructorDetails({ data, sessionData, columns, testData, columnsTest, idCenter }) {

  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();


  const handleClick = () => {
    setOpen(!open);
  };
  var logo = data.logo
  typeof logo === 'string' ? logo = logo.substr(7) : logo = ""

  const OnDetailsTest = (id)=> {
    navigate(`/testDetails/${id}/${idCenter}`);
  }
  const handelClick = (id) => {
    navigate(`/detailsSession/${id}`);
  }

  return (

    <div className="row p-4">
      <div className="col-12 col-lg-5">
      <div class="row">
          <div class="col">
            <img
              src={
                "http://localhost:5000/" + logo
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
      <div class="container" style={{padding: '0.5rem'}}  >
        <div class="row">
          <div class="col-md-auto">
            <h4>My Session : </h4>
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
                  <Button onClick={() => handelClick(row._id)} >Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}


