import React from 'react';
import './Chat.css'
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {newMessage, newUpdateMessage} from '../../actions/messages'

class ChatForm extends React.Component {

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
        socket: state.socket
    }
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({newMessage: newMessage, newUpdateMessage: newUpdateMessage}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);