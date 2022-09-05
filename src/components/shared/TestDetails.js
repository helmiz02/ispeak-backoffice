import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';


import Button from '@mui/material/Button';

import InputGroup from "./InputGroup";


import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TestDetails({ data , columnsQuestion, questionData }) {
  


  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  
  const handleClick = () => {
    setOpen(!open);
  };
  var logo = data.logo
  typeof logo === 'string' ? logo = logo.substr(7) : logo = ""
  
  
  

  return (

    <div className="row p-4">
      <div className="col-12 col-lg-5">
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}} >Id </div>
          <div class="col" style={{color: '#0071bd'}}>
            {data._id}
          </div>
        </div>
        <div class="row"style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}} >Language </div>
          <div class="col" style={{color: '#0071bd'}}>
            {data.language}
          </div>
        </div>
      </div>
      <div class="container" style={{padding: '0.5rem'}} >
        <div class="row" style={{padding: '0.5rem'}}>
        <div class="col" style={{textAlign: 'left'}} >Question </div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columnsQuestion.map((row) => (
                <TableCell align="left">{row.label} </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {questionData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row._id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.content}</TableCell>
                <TableCell align="left">{row.choice?.map((item) => (
                    <div>{item}</div>
                ))}</TableCell>
                <TableCell align="left">{row.keywords?.map((item) => (
                    <div>{item}</div>
                ))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

