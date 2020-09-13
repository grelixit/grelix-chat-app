import React, { Component } from 'react'

import classes from './Contacts.module.css';

import ContactsHeader from './ContactsHeader/ContactsHeader';
import ContactSearch from './ContactSearch/ContactSearch';
import Contact from './Contact/Contact';

export class Contacts extends Component {
    render() {
        return (
            <div className={classes.Contacts}>
                <ContactsHeader/>
                <ContactSearch/>
                <Contact/>
            </div>
        )
    }
}

export default Contacts
