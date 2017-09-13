import React from 'react';
import './Chat.css'
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {newMessage} from '../../actions/messages'

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
            this.props.newMessage({content: msg, own: false})
        })
    }

    componentWillMount() {
        console.log(this.state);
        console.log(this.props);
        console.log(this.store);
        console.log('**********************');
        console.log(this.props.messages);

    }


    submit(event) {
        event.preventDefault();
        this.emitMessage();
        this.props.newMessage({content: this.state.inputValue, own: true});
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
    return {
        socket: state.socket,
        messages: state.messages
    }
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({newMessage: newMessage}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);