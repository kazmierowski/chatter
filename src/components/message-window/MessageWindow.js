import React, {Component} from 'react';
import {connect} from "react-redux";

import Message from './../message/Message';
import './MessageWindow.css';

class MessageWindow extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        let messages = this.props.messages.map((message, index) => {
            if(message.own) {
                return <Message key={index} messageContent={message.content} messageClass="message own-message"/>
            } else {
                return <Message key={index} messageContent={message.content} messageClass="message"/>
            }
        });

        let updateMessages = this.props.updateMessages.map((message, index) => {
            // return <p>{message.content}</p>
            return <Message key={index} messageContent={message.content} messageClass="message update" />
        });

        console.log('--------------------------');
        console.log(this.props);
        return(
            <div className="message-window">
                <div className="update-messages">{updateMessages}</div>
                <ul className="message-list">
                    {messages}
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.messages,
        updateMessages: state.updateMessages
    }
};

let mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(MessageWindow);