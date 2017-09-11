import React from 'react';
import './Chat.css'

import {createSocket} from "../../actions/socket";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

        this.socketListenerInit();
    }

    socketListenerInit() {
        this.props.socket.on('chat message', (msg) => {
            console.log(msg);
        })
    }

    componentWillMount() {
        console.log(this.state);
        console.log(this.props);
        console.log(this.store);
    }


    submit(event) {
        event.preventDefault();
        this.emitMessage();
        this.props.onNewMessage(this.state.inputValue, true);
        this.setState({inputValue: ''});
    }

    emitMessage() {
        this.props.socket.emit('chat message', this.state.inputValue);
    }

    updateInputValue(event) {
        this.setState({
            inputValue: event.target.value
        })
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
    console.log('===================');
    console.log(state);
    return {
        socket: state.socket
    }
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({showMessage: showMessage}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);