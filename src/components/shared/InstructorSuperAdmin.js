import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect, useState } from 'react'
import TablePagination from "@material-ui/core/TablePagination";

export default function InstructorSuperAdminTable({ data, columns }) {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const OnDelete = (id)=>{
    if(window.confirm("are you sure to delete this instructor")){
 
     axios.delete(`http://localhost:5000/api/user/${id}`, { headers: { Authorization: `${token}` } })
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
     window.location.reload(false);
    }
   }

  return (
    <Paper>
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
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row._id}</TableCell>
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.language}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">
                <div><Button style={{color:"rgb(211,47,47)"}} onClick={()=>OnDelete(row._id)}  >Delete </Button></div>
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
  </Paper>
  );
}
