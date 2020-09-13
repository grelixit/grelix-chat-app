import React, { Component } from 'react';

import classes from './Contact.module.css';

import contactImg from '../../../assets/contactImg/Contact.jpg';

class Contact extends Component {
    render() {
        return (
            <div className={classes.Contact}>
                <img src={contactImg}/>
                <div>
                    <h4>Shadman</h4>
                    <p>Hi, I am Shadman</p>
                </div>
            </div>
        )
    }
}

export default Contact
