import React from 'react';
import Message from "./Message";

const Messages = ({ messages }) => {
    return (
        <div>
            {messages?.map((mess) => <Message   body={mess.body} send={mess.send} />)}
        </div>
    );
};

export default Messages;
