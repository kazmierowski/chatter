export default (state = [], payload) => {

    switch(payload.type) {
        case 'CREATE_SOCKET':
            console.log('wchodze w ');
            return state['socket'] = payload.socket;
        default:
            console.log('default');
            console.log(state);
            return state;
    }
}