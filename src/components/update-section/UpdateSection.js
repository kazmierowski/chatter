import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UpdateMessage from "../update-message/UpdateMessage";

class UpdateSection extends Component {

    constructor(props) {
        super(props)
    };

    createUpdateMessage(msg, index) {
        let element = <UpdateMessage key={index} className="update-messages" msg={msg} />;

        this.removeTimeout(element);

        return element;
    }

    removeTimeout(element) {
        setTimeout(() => {
            element.delete();
        }, 5000);
    }

    render() {

        let messages = this.props.updateMessages.map((message, index) => {
            return this.createUpdateMessage(message, index);
        });

        return(
            <ul className="update-wrapper">
                {messages}
            </ul>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        updateMessages: state.updateMessages
    }
};

let mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSection);