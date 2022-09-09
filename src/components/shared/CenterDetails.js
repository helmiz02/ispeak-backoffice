import * as React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Chip from "@mui/material/Chip";

import Button from '@mui/material/Button';

import InputGroup from "./InputGroup";

export default function CenterDetails({ data, admin }) {
  console.log("ppdata", data);
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
        <div class="row">
          <div class="col" style={{textAlign: 'left'}} >ID :  </div>
          <div class="col" style={{color: '#0071bd'}}>
            {data._id}
          </div>
        </div>
        <div class="row"style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}} >PHONE : </div>
          <div class="col" style={{color: '#0071bd'}}>
            {data.phone}
          </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}}>EMAIL : </div>
          <div class="col" style={{color: '#0071bd'}}>
            {data.email}
          </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}}>Color : </div>
          <div class="col">
            <div style={{ background: data.color1, color: "#FFFFFF" }}>
              {data.color1}
            </div>
          </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}}>Language : </div>
          <div class="col">
            <div> 
              { data.language?.map((item) => (
                <Chip label={item} />
              ))}
            </div>
          </div>
        </div>
        <div>
        <div class="col"> <h5>ADMIN : </h5> </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}} >First Name : </div>
          <div class="col" style={{color: '#0071bd'}}>
            {admin.firstName}
          </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}} >Last Name : </div>
          <div class="col" style={{color: '#0071bd'}}>
            {admin.lastName}
          </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}} >Phone : </div>
          <div class="col" style={{color: '#0071bd'}}>
            {admin.phone}
          </div>
        </div>
        <div class="row" style={{padding: '0.5rem'}}>
          <div class="col" style={{textAlign: 'left'}}>Email : </div>
          <div class="col" style={{color: '#0071bd'}}>
            {admin.email}
          </div>
        </div>
      </div>
    </div>
  );
}

