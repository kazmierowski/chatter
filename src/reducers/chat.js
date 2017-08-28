export default (state = [], payload) => {
    console.log('reducer');
    console.log(payload);
    switch(payload.type) {
        case 'EMIT_MESSAGE':
            console.log('emituje');
            return state;
        default:
            console.log('default');
            return state;
    }
}