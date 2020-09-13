import React, { Component } from 'react'

import classes from './ContactSearch.module.css';

export class ContactSearch extends Component {
    render() {
        return (
            <div className={classes.ContactSearch}>
                <input type="text" name="search">

                </input>
            </div>
        )
    }
}

export default ContactSearch
