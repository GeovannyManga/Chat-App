
import { useState } from "react";

const Input = (socket) => {


    const [message, setMessage] = useState('')
    
    const handlerSubmit= (e)=>{
        e.preventDefault()
        socket.emit('message', message)
        
    }
    return (
        <div>
            <form onSubmit={handlerSubmit} >
                <input onChange={(e)=>setMessage(e.target.value)}  type="text" />
                <button type='submit' >submit</button>
            </form>
        </div>
    );
};

export default Input;