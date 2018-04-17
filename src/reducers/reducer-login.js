export default (state=[],action)=>{
    debugger;
    switch (action.type){
        case 'LOGIN':
            debugger;
            return action.response;
        default:
            return state;
    }
}