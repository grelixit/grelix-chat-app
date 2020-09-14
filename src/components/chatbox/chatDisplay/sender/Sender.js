import React, { Component } from 'react'

import classes from './Sender.module.css';
import contactImg from '../../../../assets/profileImg/profile3.png';

class Sender extends Component {
    render() {
        return (
            <div className={classes.Sender}>
                    <img src={contactImg}/>
                    <div>
                        <p> Hello I am Shadman boss</p>
                    </div>
                    
                </div>
        )
    }
}

export default Sender
