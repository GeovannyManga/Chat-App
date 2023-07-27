import React from 'react';
import {  } from "../../Styles/Chat/Message.css";
import { useAuth } from "../../context/authContext";

const Message = ({ body, send}) => {
    const auth = useAuth()
    const email = auth.user.email
    return (
        <div className='container-message'>
            <span>{send===email? "me":send}: </span>
            <span className='text-message'>
                {body}
            </span>
        </div>
    );
};

export default Message;
