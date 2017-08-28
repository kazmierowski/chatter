import React, { Component } from 'react';
import './App.css';
import Chat from './components/chat/Chat.js'
import openSocket from 'socket.io-client';
import {createSocket} from './actions/socket'
import {connect} from "react-redux";
import dispatch from "redux/es/createStore";

class App extends Component {

  // static initSocket() {
  //   return openSocket();
  // }


  render() {

      dispatch(createSocket());
    return (
      <Chat />
    );
  }
}

export default connect()(App);
