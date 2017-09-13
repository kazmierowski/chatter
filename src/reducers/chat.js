export default (state = [], payload) => {

    switch(payload.type) {
        case 'EMIT_MESSAGE':
            console.log('emituje');
            return state;
        default:
            console.log('default');
            return state;
    }
}