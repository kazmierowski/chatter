import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {newMessage, newUpdateMessage} from '../../actions/messages';
import ChatForm from '../chat-form/ChatForm';
import MessageWindow from '../message-window/MessageWindow';

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

        this.socketListenerInit();
    }

    componentDidMount() {
        // todo: add name input enter to add name to state
        this.props.socket.emit('join', 'Kamil');
    }

    socketListenerInit() {
        this.props.socket.on('chat message', (user, msg, time) => {
            this.props.newMessage({user: user, content: msg, time: time, own: false})
        })
            .on('update', (msg) => {
                this.props.newUpdateMessage({user: 'system', content: msg})
            })
            .on('update-people', (people) => {
                console.log(people);
            })
    }

    render() {

        return (
          <div>
              <MessageWindow />
              <ChatForm />
          </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        socket: state.socket,
        messages: state.messages,
        updateMessages: state.updateMessages
    }
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({newMessage: newMessage, newUpdateMessage: newUpdateMessage}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);