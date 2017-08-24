import React from 'react';
import './Chat.css'

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    submit(event) {
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

export default Chat;