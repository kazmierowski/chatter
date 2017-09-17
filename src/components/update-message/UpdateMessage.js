
import React from 'react';
import './UpdateMessage.css';

export default function UpdateMessage(props) {

    return (
        <li className='update-message'>
            {props.msg.user}: {props.msg.content}
        </li>
    )
}
