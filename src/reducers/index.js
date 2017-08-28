import socket from './socket';
import chat from './chat';
import {combineReducers} from 'redux';

console.log(socket);
const rootReducer = combineReducers({
    socket, chat
});

export default rootReducer;