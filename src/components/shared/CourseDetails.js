import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import InputGroup from "./InputGroup";
import { Component } from 'react';
import { Document, Page } from 'react-pdf';

import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



export default function CourseDetails({ data, columnsQuestion, questionData }) {

  var logo = data.logo
  typeof logo === 'string' ? logo = logo.substr(7) : logo = ""

   var course = data.content
   typeof course === 'string' ? course = course.substr(7) : course = ""
   
   var link = "https://ispeak.api.pfe.anypli.com/"+ course

  return (

    <div className="row p-4">
      <div className="col-12 col-lg-5">
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }} >Id </div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data._id}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }} >Name </div>
          <div class="col" style={{ color: '#0071bd' }}>
            {data.name}
          </div>
        </div>
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }} >content </div>
          <div class="col" style={{ color: '#0071bd' }}>
          <object data={link} type="text/html" >
              <p>Tap the link <a href={link} >to the PDF!</a></p>
            </object>
          </div>
        </div>
      </div>
      <div class="container" style={{ padding: '0.5rem' }} >
        <div class="row" style={{ padding: '0.5rem' }}>
          <div class="col" style={{ textAlign: 'left' }} >Question </div>
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
//"http://africau.edu/images/default/sample.pdf"
