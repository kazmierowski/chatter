export const createSocket = (socket) => {
    console.log('socketCreated:', socket);

    return {
        type: create,
        socket
    }
}