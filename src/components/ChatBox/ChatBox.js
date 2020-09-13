import React, { Component } from 'react'

import classes from './chatbox.module.css';

import ChatHeader from './ChatHeader/ChatHeader';
import ChatDisplay from './ChatDisplay/ChatDisplay';
import Chat from './Chat/Chat';

export class chatbox extends Component {
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

export default chatbox
