import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk';
// createStore创建状态，第一个参数是reducer，用来存放状态；第二个参数是初始化状态initialState,第三个参数用来放一些中间件
let initialState = {
    num:0
}
let store = createStore(reducer,initialState,applyMiddleware(thunk));
export default store;