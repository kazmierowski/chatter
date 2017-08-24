import React, { Component } from 'react';
import './App.css';
import Chat from './components/chat/Chat.js'
import openSocket from 'socket.io-client';

class App extends Component {

  static initSocket() {
    return openSocket();
  }

  render() {

    let socket = App.initSocket();

    return (
      <Chat socket={socket}/>
    );
  }
}

export default App;
