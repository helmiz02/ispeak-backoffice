import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import axios from 'axios'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';


export default function DataTable({ data, columns, totalData }) {
  console.log("ppdata", data);

 
  const navigate = useNavigate();
  
  const handelClick= (id) =>  {
    navigate(`/detailsCenterInstructor/${id}`); 
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
              <TableCell>
                {row.logo && (
                  <img
                    src={  //https://ispeak.api.pfe.anypli.com/
                      "http://localhost:5000/" + row.logo.substr(7)
                    }
                    alt="logocentre"
                    style={{ width: 24 }}
                  />
                )}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">
                {row.language.map((item) => (
                  <Chip label={item} />
                ))}
              </TableCell>

              <TableCell align="left">
                <div style={{ background: row.color1, color: row.color1 }}>
                  {"color"}{" "}
                </div>
              </TableCell>
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
