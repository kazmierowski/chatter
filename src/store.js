import { createStore } from 'redux';
import rootReducer from  './reducers/index';

export default(initialState) => {
    console.log('create store call');
    return createStore(rootReducer, initialState);
}