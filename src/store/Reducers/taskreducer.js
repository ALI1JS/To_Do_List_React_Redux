import { ADD } from "../actions/types";

const initState={tasks:[]};

export const TaskReducer=(state=initState,action)=>{
   switch(action.type){
    case ADD:
        console.log(action.payload)
        return {tasks:action.payload}
    default:
        return state;    
   }
}