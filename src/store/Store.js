// store.js
import { createStore } from 'redux';
import counterReducer from '../Reducer/Reducers';

const store = createStore(counterReducer);

export default store;
