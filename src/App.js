import React from 'react';
import classes from './App.module.css';

import Contacts from './components/Contacts/Contacts';
import Chatbox from './components/ChatBox/ChatBox';

function App() {
  return (
   <div className={classes.App}>
    <Contacts/>
    <Chatbox/>
   </div>
  );
}

export default App;
