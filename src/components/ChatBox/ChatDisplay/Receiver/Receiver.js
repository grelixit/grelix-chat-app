import React, { Component } from 'react'

import classes from './Receiver.module.css';

export class Receiver extends Component {
    render() {
        return (
            <div>
                <div className={classes.Receiver}>
                    <p>
                        Hi, Iam Rashek the CEO..
                    </p>
                </div>
            </div>
        )
    }
}

export default Receiver
