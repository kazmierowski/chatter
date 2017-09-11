import React, {Component} from 'react'
import './App.css'
import Chat from './components/chat/Chat.js'
import MessageWindow from './components/message-window/MessageWindow'
import {createSocket} from './actions/socket'
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'

class App extends Component {

    onNewMessage(msg, isOwnMessage) {

    }

    createNewMessage(msg, isOwnMessage) {

    }

    render() {

        this.props.createSocket();
        return (
          <div className="main-chat-window">
              <MessageWindow createNewMessage={this.createNewMessage}/>
              <Chat onNewMessage={this.onNewMessage} />
          </div>

        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createSocket: createSocket}, dispatch)
};

export default connect(null, mapDispatchToProps)(App);
