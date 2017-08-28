import React from 'react';
import './Chat.css'

import {createSocket} from "../../actions/socket";
import {connect} from "react-redux";

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    componentWillMount() {
        console.log(this.state);
        console.log(this.props);
        console.log(this.store);

        createSocket()
    }


    submit(event) {
        console.log(this.props);
        event.preventDefault();
        this.emitMessage();
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

export default connect(state => ({socket: state.socket}))(Chat);