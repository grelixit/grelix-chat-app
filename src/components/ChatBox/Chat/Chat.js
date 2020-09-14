import React, { Component } from 'react'

import classes from './Chat.module.css';

export class Chat extends Component {
    render() {
        return (
            <div className={classes.Chat}>
                <input type="text"></input>
                <div>
                <button>Send</button>
                </div>
            </div>
        )
    }
}

export default Chat
