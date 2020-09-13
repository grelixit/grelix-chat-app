import React, { Component } from 'react';

import classes from './Contacts.module.css';

import ContactsHeader from './contactsHeader/ContactsHeader';
import ContactSearch from './contactSearch/ContactSearch';
import Contact from './contact/Contact';

class Contacts extends Component {
    render() {
        return (
            <div className={classes.Contacts}>
                <ContactsHeader/>
                <ContactSearch/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
            </div>
        )
    }
}

export default Contacts
