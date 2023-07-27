import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import { useAuth } from "../../context/authContext";
import { useDispatch } from "react-redux";
import { messagesList } from "../../redux/actions";

const Input = () => {
  const dispatch = useDispatch();

  const [send, setSend] = useState('');
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const auth = useAuth();
  const email = auth.user.email;
  const socket = io('http://localhost:3000');

  useEffect(() => {
    // Escuchamos cambios en messageList para despachar la acción cuando cambie
    dispatch(messagesList(messageList));
  }, [messageList, dispatch]);

  socket.on('privateMessage', (message) => {
    // Usamos una función de actualización para asegurarnos de obtener el valor más reciente
    setMessageList((prevMessageList) => [...prevMessageList, message]);
    console.log(messageList);
  });

  useEffect(() => {
    if (auth.user.email) {
      socket.emit('login', email);
    }
  }, [auth.user]);

  const handlerInput = (e) => {
    e.preventDefault();

    const newMessage = {
      send: email,
      body: message,
    };
    if (auth.user.email) {
      socket.emit('privateMessage', send, newMessage);
      setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
    }

    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handlerInput}>
        <input value={send} onChange={(e) => setSend(e.target.value)} type="text" placeholder="ponga su destinatario" />
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Input;
