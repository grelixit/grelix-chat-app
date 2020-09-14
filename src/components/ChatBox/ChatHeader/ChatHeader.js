import React, { Component } from 'react'

import classes from './ChatHeader.module.css';

import ContactImg from '../../../assets/ProfileImage/ProfileImg.png' 

export class ChatHeader extends Component {
    render() {
        return (
            <div className={classes.ChatHeader}>
                <h4>
                <img src={ContactImg}></img>
                    Sadman Chowdhury
                </h4>
            </div>
        )
    }
}

export default ChatHeader
