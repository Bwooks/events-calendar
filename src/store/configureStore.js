import {createStore} from 'redux';

export const configureStore = (reducer, initialState) => {
    return createStore(reducer, initialState);
}