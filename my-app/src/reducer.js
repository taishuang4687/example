import {combineReducers} from 'redux';
//接收老的state和action，返回新的state,这是一个计算过程 
//combineReducer是一个大的reducer，可以写多个reducer放在一起，大的对象
let num = (state=0,action)=>{
    // console.log(state,action);
    switch(action.type){
        case 'ADD':
            return state+action.count;
        case 'REDUCE':
            return state-1;
    }
    return state+1;
}
export default combineReducers({
    num
});