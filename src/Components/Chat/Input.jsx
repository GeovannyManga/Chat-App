import React, { useState } from 'react';
import io from "socket.io-client";
import { useAuth } from "../../context/authContext";

const Input = () => {
  const [message, setMessage] = useState("");
  const auth = useAuth();
  const email = auth.user.email;
  const socket = io('http://localhost:3000');
  console.log(message)

  const handlerInput = (e) => {
    // No necesitas e.preventDefault() aquí, ya que el formulario no se enviará automáticamente.
   e.preventDefault()
    
    const newMessage = {
      send: email,
      body: message,
    };
    socket.emit("message", newMessage);
    setMessage("");
  };

  return (
    <div>
      {/* Usa un atributo onSubmit que devuelva false para evitar que el formulario se envíe automáticamente */}
      <form onSubmit={handlerInput}>
        {/* Utiliza el atributo "value" en lugar de "defaultValue" para mostrar el valor actual del estado "message" */}
        <input value={message} onChange={e=>setMessage(e.target.value)} type="text" />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Input;
