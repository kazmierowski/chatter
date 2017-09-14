import React, {Component} from 'react';
import {connect} from "react-redux";

import Message from './../message/Message';
import './MessageWindow.css';

class MessageWindow extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        let messages = this.props.messages.map((message) => {
            if(message.own) {
                return <Message messageContent={message.content} messageClass="message own-message"/>
            } else {
                return <Message messageContent={message.content} messageClass="message"/>
            }
        });

        console.log('--------------------------');
        console.log(this.props);
        return(
            <div className="message-window">
                <ul className="message-list">
                    {messages}
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
};

let mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(MessageWindow);