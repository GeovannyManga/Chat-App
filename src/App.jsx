import Navbar from "../src/Components/Chat/Navbar";
import Messages from "../src/Components/Chat/Messages";
import './App.css'

import { useState, useEffect } from "react";
import { AuthProvider } from "../src/context/authContext";



import AuthForm from "./Components/Auth/AuthForm";



// ... importaciones y código previo ...

function App() {
  
 

 
  



  const [messageList, setMessageList] = useState([]);

 



  return (
    <>
      <AuthProvider>
        <Navbar />
        <Messages messages={messageList} />
        <AuthForm></AuthForm>
      </AuthProvider>
            </>
  );
}

export default App;
