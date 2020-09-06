import React from 'react';
import './App.css';
import { Sidebar } from './containers/Sidebar';

function App() {
  return (
    <div id="container">
      <Sidebar />
      <section id="main">
        <section id="messages-list">Messages list</section>
        <section id="new-message">New message</section>
      </section>
    </div>
  );
}

export default App;
