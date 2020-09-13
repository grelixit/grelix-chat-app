import React from 'react';
import classes from './App.module.css';

import Contacts from './components/contacts/Contacts';
import ChatBox from './components/chatbox/ChatBox';

function App() {
  return (
    <div className={classes.App}>
      <Contacts/>
      <ChatBox/>
    </div>
  );
}

export default App;
