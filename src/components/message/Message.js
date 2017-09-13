import React, {Component} from 'react';

import './Message.css';

export default class Message extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li className={this.props.messageClass}>
                {this.props.messageContent}
            </li>
        )

    }
}