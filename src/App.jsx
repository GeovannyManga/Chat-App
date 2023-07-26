import Navbar from "../src/Components/Chat/Navbar";
import Messages from "../src/Components/Chat/Messages";
import './App.css'
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/authContext";

const socket = io('http://localhost:3000');

// ... importaciones y código previo ...

function App() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      console.log("Mensaje recibido: ", message);
      setMessageList((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handlerSubmit = (e) => {
    const newMessage = {
      send: "me",
      body: message,
    };
    e.preventDefault();
    setMessageList((prevMessages) => [...prevMessages, newMessage]);
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <AuthProvider>
      <>
        <Navbar />
        <Messages messages={messageList} />
        <form onSubmit={handlerSubmit}>
          <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
          <button type='submit'>submit</button>
        </form>
      </>
    </AuthProvider>
  );
}

export default App;
