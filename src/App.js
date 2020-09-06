import React from 'react';
import './App.css';
import { Sidebar } from './containers/Sidebar';
import { MessagesList } from './containers/MessagesList';

function App() {
  return (
    <div id="container">
      <Sidebar />
      <section id="main">
        <MessagesList />
        <section id="new-message">New message</section>
      </section>
    </div>
  );
}

export default App;
