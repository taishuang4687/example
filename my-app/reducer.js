import {combineReducers} from 'redux';
let num = (state=0,action)=>{
    console.log(state,action);
    switch(action.type){
        case 'ADD':
            return state+1;
        
    }
}
export default combineReducers({
    num
});