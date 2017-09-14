import socket from './socket';
import messages from './messages';
import {combineReducers} from 'redux';
import updateMessages from "./updateMessages";

console.log(socket);
const rootReducer = combineReducers({
    socket, messages, updateMessages
});

export default rootReducer;