import axios from 'axios';
import store from './store'
export let add = (count)=>{
    // console.log('触发了add action');
    return ()=>{
        // console.log('action进入了')
        axios.get('/test.json')
        .then((result)=>{
            // console.log(result.data);
            store.dispatch({
                type:'ADD',
                count:result.data.data
            })
        })
    }
    }
export let reduce = ()=>{
    return {
        type:'REDUCE'
    }
}