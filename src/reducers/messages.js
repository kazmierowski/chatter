export default (state = [], payload) => {

    switch(payload.type) {
        case 'INIT_MESSAGES':
            return state['messages'] = payload.messages;
        case 'NEW_MESSAGE':
            return [...state, payload.message];
        default:
            return state;
    }
}