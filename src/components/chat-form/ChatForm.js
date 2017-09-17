import React from 'react';
import './ChatForm.css'
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {newMessage, newUpdateMessage} from '../../actions/messages'

class ChatForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    getCurrentTime() {
        let date = new Date();

        let hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;

        let min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;

        let sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;

        return `${hour}:${min}:${sec}`;
    };

    submit(event) {
        event.preventDefault();

        if(this.state.inputValue !== '') {
            this.emitMessage();
            this.props.newMessage({content: this.state.inputValue, time: this.getCurrentTime(), own: true});
            this.setState({inputValue: ''});
        }
    }

    emitMessage() {
        this.props.socket.emit('send', this.state.inputValue);
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);