import socket from './socket';
import messages from './messages';
import {combineReducers} from 'redux';

console.log(socket);
const rootReducer = combineReducers({
    socket, messages
});

export default rootReducer;