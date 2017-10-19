import * as types from '../action-type/store';

let initState = [];
export default function store(state=initState,action){
    switch(action.type){
        case Types.ADD_STORE:
            //如果是添加会传递新的id,放到数组中即可；
            return [...state,action.data]; 
        case Types.ReMove_STORE:
            //通过传递的id将数组中的某一项除掉；
            return state.filter(item =>action.data!==item);
        default:
            return state; 
    }
}