import Navbar from "../src/Components/Chat/Navbar";
import Messages from "../src/Components/Chat/Messages";
import './App.css'
import io from "socket.io-client";

const socket = io('http://localhost:3000');


function App() {
 console.log("hola mundo, todo marcha super bien")

  return (
    <>
    <Navbar></Navbar>
    <Messages></Messages>
       
    </>
  )
}

export default App

