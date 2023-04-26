import {createSlice}from "@reduxjs/toolkit";

let inittasks={tasks:[]};

export const TaskSlice=createSlice({
    name:'Tasks',
    initialState:inittasks,
    reducers:{
        Add:(state,action)=>{
            state.tasks.push({task:action.payload.value,id:action.payload.id});
        },
        Remove:(state,action)=>{
            state.tasks.map((ele)=>{
                if(ele.id===action.payload.id){
                    return ele
                }
                return 0;
            })
        },
        Edit:()=>{}
    }
});

export const taskactions=TaskSlice.actions;