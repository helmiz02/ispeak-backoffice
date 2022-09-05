import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect, useState } from 'react'
import AddQuestionModal from "./addQuestionModal";

export default function QuesToaddTable({ data, columns, totalData, centerId }) {

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");

  const OnDelete = (id) => {
    if (window.confirm("are you sure to delete this question")) {

      axios.delete(`http://localhost:5000/api/${centerId}/question/${id}`, { headers: { Authorization: `${token}` } })
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
  return (
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
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.content}</TableCell>
              <TableCell align="left">{row.choice?.map((item) => (
                <div>{item}</div>
              ))}</TableCell>
              <TableCell align="left">{row.keywords?.map((item) => (
                <div>{item}</div>
              ))}</TableCell>
              <TableCell align="left">
                <div><Button color="error" onClick={() => OnDelete(row._id)}>Delete</Button></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}
