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

export default function DataTable({ data, columns, totalData }) {
  
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

  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  const token = localStorage.getItem("token");

  const handelClick= (id) =>  {
    navigate(`/detailsCenter/${id}`);
  }

  const OnDelete = (id)=>{
    if(window.confirm("are you sure to delete this center")){
 
     axios.delete(`http://localhost:5000/api/center/${id}`, { headers: { Authorization: `${token}` } })
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

  const OnUpdate = (id) =>  {
    navigate(`/UpdateCenter/${id}`);
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
              <TableCell>
                {row.logo && (
                  <img
                    src={  //https://ispeak.api.pfe.anypli.com/
                      "http://localhost:5000/" + row.logo.substr(7)
                    }
                    alt="logocentre"
                    style={{ width: 40 }}
                  />
                )}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">
                {row.language.map((item) => (
                  <Chip label={item} />
                )).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
              </TableCell>

              <TableCell align="left">
                <div style={{ background: row.color1, color: row.color1 }}>
                  {"color"}{" "}
                </div>
              </TableCell>
              <TableCell align="left">
                <div><Button color="secondary" onClick={()=>handelClick(row._id) } >Details</Button></div>
                <div><Button onClick={()=>OnUpdate(row._id)} >Update center</Button></div>
                <div><Button color="error" onClick={()=>OnDelete(row._id)}  >Delete center</Button></div>
              </TableCell>
            </TableRow>
          ))}
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
