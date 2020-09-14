import React, { Component } from 'react'

import classes from './ChatDisplay.module.css';

import Sender from './Sender/Sender';
import Receiver from './Receiver/Receiver';

export class ChatDisplay extends Component {
    render() {
        return (
            <div className={classes.ChatDisplay}>
                <Sender/>
                <Receiver/>
            </div>
        )
    }
}

export default ChatDisplay
