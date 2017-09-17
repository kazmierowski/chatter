import React, {Component} from 'react'
import './App.css'
import Chat from './components/chat/Chat.js'
import {createSocket} from './actions/socket'
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'

class App extends Component {

    render() {

        this.props.createSocket();
        return (
          <div className="main-chat-window">
              <Chat />
          </div>

        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createSocket: createSocket}, dispatch)
};

export default connect(null, mapDispatchToProps)(App);
