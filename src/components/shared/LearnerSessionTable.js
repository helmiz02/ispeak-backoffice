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




export default function LearnerSessionTable({ data, columns}) {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const OnChat = (id) =>  {
    navigate(`/chat/${id}`);
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
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">
                <div><Button color="error"  onClick={()=>OnChat(row._id)} >Chat</Button></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
