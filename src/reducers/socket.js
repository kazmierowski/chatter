import openSocket from 'socket.io-client';

export default (state = [], payload) => {
    console.log('reducer');
    console.log(payload);
    switch(payload.type) {
        case 'CREATE_SOCKET':
            console.log('wchodze w ');
            return state['socket'] = payload.socket;
        default:
            console.log('default');
            return state;
    }
}