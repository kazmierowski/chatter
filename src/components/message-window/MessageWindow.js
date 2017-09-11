import React, {Component} from 'react';


class MessageWindow extends Component {

    render() {
        console.log('--------------------------');
        console.log(this.props);
        return(
          <ul id="messages">{this.props.message}</ul>
        )
    }
}

export default MessageWindow;