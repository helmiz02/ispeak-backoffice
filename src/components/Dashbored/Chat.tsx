import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate, useParams } from 'react-router-dom';
import ChatPage from '../shared/ChatPage';


export default function Chat() {  

    const {id} = useParams();  
    const idIndtructor = localStorage.getItem("id"); 
    console.log("id1", id , "id2", idIndtructor);
    

  return (
    
    <div className="row">
    <Sidebar />
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Chat</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            
          </div>
        </div>
        <div className="row p-4">
          <div >
            <ChatPage idLearner={id} idInstructor={idIndtructor} />
          </div>
        </div>
    </main>
  </div>
  )
}
