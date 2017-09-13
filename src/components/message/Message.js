import React, {Component} from 'react';

export default class Message extends Component {

    render() {
        return(
            <li className='message'>
                {this.props.messageContent}
            </li>
        )

    }
}