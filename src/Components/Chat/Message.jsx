import React from 'react';
import {  } from "../../Styles/Chat/Message.css";

const Message = ({ body, send}) => {
    return (
        <div className='container-message'>
            <span>{send}: </span>
            <span className='text-message'>
                {body}
            </span>
        </div>
    );
};

export default Message;
