import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

import { useAuth } from "../../context/authContext";
import  axios from "axios";


const AuthForm = () => {
    const [messageList, setMessageList]= useState([])
    const socket = io('http://localhost:3000');
    const auth = useAuth()
    const name = auth.user.displayName
    const email = auth.user.email
    const  photo = auth.user.photoURL


  
    useEffect(() => {
      socket.on('message', (message) => {
        console.log("Mensaje recibido: ", message);
        setMessageList((prevMessages) => [...prevMessages, message]);
      });
  
      return () => {
        socket.off('message');
      };
    }, []);
  
   
    


    useEffect(()=>{
        const create = async()=>{


        const userData = {
            email: email,
            name: name,
            photo: photo,
            message: [],
          };
          
          await axios.post('http://localhost:3000/createUser', userData)
            .then((response) => {
              console.log('Respuesta del servidor:', response.data);
            })
            .catch((error) => {
              console.error('Error al enviar los datos:', error);
            });
        }
        create()

            console.log(auth.user.photoURL)
          
    },[auth.user])

    const handlerGoogle = (e)=>{
        e.preventDefault()
        auth.loginWithGoogle()
       console.log(auth.user.photo)
    }

    const logout = ()=>{
        auth.logout()
    }


 
    return (
        <div>
            <form action="">
                <input type="text" />
                <input type="password" />
                <button>login</button>
            </form>
            <form action="">
                <input type="text" />
                <input type="password" />
                <button>sign up</button>
            </form>
                <button onClick={(e)=>handlerGoogle(e)} >White Google</button>
                <button onClick={logout} >logout</button>
                
                

        </div>
    );
};

export default AuthForm;