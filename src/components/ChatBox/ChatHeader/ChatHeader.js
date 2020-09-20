import React, { Component } from 'react'

import classes from './ChatHeader.module.css';

import ContactImg from '../../../assets/ProfileImage/ProfileImg1.png' 

export class ChatHeader extends Component {
    render() {
        return (
            <div className={classes.ChatHeader}>
                <h4>
                <img src={ContactImg}></img>
                    Rashek Humayun
                </h4>
            </div>
        )
    }
}

export default ChatHeader
