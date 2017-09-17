import React, {Component} from 'react';

import './Message.css';

export default function Message(props) {

    return (
        <li className={props.messageClass}>
            <div className="message-time">{props.time}</div>
            <span className="user-name">{props.user}:</span> {props.messageContent}
        </li>
    )
}