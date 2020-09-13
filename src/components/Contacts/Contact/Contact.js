import React, { Component } from 'react'

import classes from './Contact.module.css';

import ContactImage from '../../../assets/ContactImage/ProfileImage.jpg';

export class Contact extends Component {
    render() {
        return (
            <div className={classes.Contact}>
                <img src={ContactImage}></img>
                <div>
                    <h4>
                        Sadman
                    </h4>
                    <p>
                        Hi, there .. I am Sadman
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact
