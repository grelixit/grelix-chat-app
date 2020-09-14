import React, { Component } from 'react'

import classes from './Sender.module.css';

import contactImg from '../../../../assets/ProfileImage/ProfileImg1.png';

export class Sender extends Component {
    render() {
        return (
            <div>
                <div className={classes.Sender}>
                    <img src={contactImg}/>
                        <p>
                            Hello I am Sadman Boss
                        </p>
                </div>
            </div>
        )
    }
}

export default Sender
