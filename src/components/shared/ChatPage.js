import React, { useContext, useEffect, useState } from "react";
import './chatStyle.css'
import axios from 'axios'

import socketIOClient from "socket.io-client";
import Login from "../Login";
const ENDPOINT = "https://e36f-102-157-52-38.eu.ngrok.io/";


export default function ChatPage({ idLearner, idInstructor }) {


  const [messages, setMessages] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");

  const token = localStorage.getItem("token");

  const getMessage = () => {
    //`https://ispeak.api.pfe.anypli.com/api/628f7b8cddfc7db7168acb23/getMessagesByOne/${idLearner}/${idInstructor}/`
    //`https://ispeak.api.pfe.anypli.com/api/628f7b8cddfc7db7168acb23/getMessagesByOne/630a5a1b27ad109dea61177a/630a57675cf77d8fc7dc671c/`
    axios.get(`https://ispeak.api.pfe.anypli.com/api/628f7b8cddfc7db7168acb23/getMessagesByOne/${idLearner}/${idInstructor}/`, { headers: { Authorization: `${token}` } }).then(res => {
      setMessages(res.data)
      console.log("messss", res.data);
    })

  }

  useEffect(() => {
    window.addEventListener("click", getMessage)
    getMessage()
  }, [])

  const submitForm = (e) => {
    e.preventDefault()
    setMessageToSend("")
    axios.post(`https://ispeak.api.pfe.anypli.com/api/628f7b8cddfc7db7168acb23/message/${idInstructor}`, {
      "content": messageToSend,
      "receiver": idLearner
    }
      , { headers: { Authorization: `${token}` } }).then(res => {
        getMessage()
      })
  }
  return (
    <div id="app">


      <div className="messages">
        {messages.map(message =>
          <div className="message">
            <div>
              <h6>  {message.sender.firstName + " " + message.sender.lastName}</h6>
              <p>{message.content}</p>
            </div>
            <p className="timestamp grey small">{message.Time + " " + message.date}</p>
          </div>

        )}
      </div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="name"
          placeholder="Type a message..."
          autoComplete="off"
          value={messageToSend}
          onChange={(e) => setMessageToSend(e.target.value)}
        />
        <button type="submit" className="submit ion-ios-paperplane-outline" />
      </form>
    </div>

  );
};

