import socket from './socket';
import {combineReducers} from 'redux';

console.log(socket);
const rootReducer = combineReducers({
    socket
});

export default rootReducer;