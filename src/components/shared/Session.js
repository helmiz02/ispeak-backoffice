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


export default function SessionTable({ data, columns, totalData }) {
  console.log("ppdata", data);

  const navigate = useNavigate();

  const handelClick= (id) =>  {
    navigate(`/detailsSession/${id}`);
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
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.beginDate}</TableCell>
              <TableCell align="left">{row.endDate}</TableCell>
              <TableCell align="left">{row.level}</TableCell>
              <TableCell align="left">{row.language}</TableCell>
              <TableCell align="left">{row.instructor.firstName}</TableCell>
              <TableCell align="left">
              <Button color="secondary" onClick={()=>handelClick(row._id) } >Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
