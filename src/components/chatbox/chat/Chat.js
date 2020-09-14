import React, { Component } from 'react';

import classes from './Chat.module.css';

class Chat extends Component {
    render() {
        return (
            <div className={classes.Chat}>
                <input type='text'/>
                <div>
                <button>Send</button>
                </div>
                
            </div>
        )
    }
}

export default Chat
