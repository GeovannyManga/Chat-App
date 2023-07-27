import React from 'react';
import { useSelector } from "react-redux";
import Message from "./Message";
import { messagesList } from "../../redux/actions";

const Messages = ({ messages }) => {
    const messageList = useSelector(state=> state.messagesList)

    console.log(messageList)

    return (
        <div>
            {messageList?.map((mess) => <Message   body={mess.body} send={mess.send} />)}
        </div>
    );
};

export default Messages;
