import React, { Component } from 'react';

import classes from './ChatDisplay.module.css';

import Sender from './sender/Sender';
import Receiver from './reciever/Receiver';



class ChatDisplay extends Component {
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
