import Navbar from "../src/Components/Chat/Navbar";
import Messages from "../src/Components/Chat/Messages";
import './App.css'
import Input from "../src/Components/Chat/Input";
import { AuthProvider } from "../src/context/authContext";
import AuthForm from "./Components/Auth/AuthForm";

// ... importaciones y código previo ...

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Messages />
        <AuthForm></AuthForm>
        <Input></Input>
      </AuthProvider>
            </>
  );
}

export default App;
