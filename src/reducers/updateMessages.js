export default (state = [], payload) => {

    switch(payload.type) {
        case 'INIT_MESSAGES':
            return state['updateMessages'] = payload.messages;
        case 'NEW_UPDATE_MESSAGE':
            return [...state, payload.message];
        default:
            return state;
    }
}