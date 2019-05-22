import createStore from 'redux';
import reducer from './reducer';
let initialState = {
    num:1
}
let store = createStore(reducer,initialState);
export default store;