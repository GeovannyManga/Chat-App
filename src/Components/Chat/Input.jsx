import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import { useAuth } from "../../context/authContext";

const Input = () => {
    const auth = useAuth()
    const socket = io('http://localhost:3000');
   const [message, setMessage]= useState("")
   const [messageList, setMessageList]= useState([])

   const handlerInput = (e)=>{
    e.preventDefault()
    const newMessage = {
        send: email
    }
       socket.emit("message", )

   }
    
    return (
        <div>
            <form action="">
                <input type="text" />
                <button type='submit'>send</button>
            </form>
            
        </div>
    );
};

export default Input;