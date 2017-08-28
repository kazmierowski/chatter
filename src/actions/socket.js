import openSocket from 'socket.io-client';

export const createSocket = () => {

    let socket = openSocket();

    return {
        type: 'CREATE_SOCKET',
        socket: socket
    }
};