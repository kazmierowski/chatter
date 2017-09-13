import React, {Component} from 'react';
import {connect} from "react-redux";

import Message from './../message/Message';

class MessageWindow extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }
    
    render() {
        console.log('--------------------------');
        console.log(this.props);
        return(
            <div className="message-window">
                {this.messages}
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