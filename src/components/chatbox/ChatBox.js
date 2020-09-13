import React, { Component } from 'react';

import classes from './ChatBox.module.css';

import ChatHeader from './chatHeader/ChatHeader';
import ChatDisplay from  './chatDisplay/ChatDisplay';
import Chat from './chat/Chat';

class ChatBox extends Component {
    render() {
        return (
            <div>
                <ChatHeader/>
                <ChatDisplay/>
                <Chat/>
            </div>
        )
    }
}

export default ChatBox
