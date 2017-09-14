import React from 'react';
import './Chat.css'
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {newMessage, newUpdateMessage} from '../../actions/messages'

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

    render() {

        return (
          <form action="#">
              <input id="chat-input" value={this.state.inputValue} onChange={event => this.updateInputValue(event)}/>
              <button onClick={event => this.submit(event)}>Send</button>
          </form>
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