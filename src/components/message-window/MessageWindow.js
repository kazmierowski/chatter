import React, {Component} from 'react';
import {connect} from "react-redux";

import Message from './../message/Message';
import UpdateSection from '../update-section/UpdateSection';

import './MessageWindow.css';

class MessageWindow extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        let messages = this.props.messages.map((message, index) => {
            if(message.own) {
                return <Message key={index} messageContent={message.content} user="Me" time={message.time} messageClass="message own-message"/>
            } else {
                return <Message key={index} messageContent={message.content} user={message.user} time={message.time} messageClass="message"/>
            }
        });

        // let updateMessages = this.props.updateMessages.map((message, index) => {
        //     return <Message key={index} messageContent={message.content} user={message.user} time={message.time} messageClass="message update" />
        // });

        return(
            <div className="message-window">
                <UpdateSection />

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