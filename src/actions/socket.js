import openSocket from 'socket.io-client';

export const createSocket = (() => {

    console.log('socket created');
    let socket = openSocket();

    return {
        type: 'CREATE_SOCKET',
        socket: socket
    }
});