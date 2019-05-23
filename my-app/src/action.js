export let add = (count)=>{
    // console.log('触发了add action');
    return {
        type:'ADD',
        count:count
    }
}
export let reduce = ()=>{
    return {
        type:'REDUCE'
    }
}