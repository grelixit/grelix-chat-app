import React, { Component } from 'react';

import classes from './ChatHeader.module.css';

import contactImg from '../../../assets/profileImg/profile3.png';


class ChatHeader extends Component {

    render() {
        return (
            <div className={classes.ChatHeader}>
                <img src={contactImg}/>
                <h4>Shadman Atul</h4>
            </div>
        )
    }
}

export default ChatHeader
