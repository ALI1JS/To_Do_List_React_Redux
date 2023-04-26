import { createSlice } from "@reduxjs/toolkit";

const initState={isAuth:false}
export const authslice=createSlice({
    name:"auth",
    initialState:initState,
    reducers:{
        checklogin:(state,action)=>{
             state.isAuth=!state.isAuth;
             console.log(state.isAuth)
        }
    }
})
export const {checklogin}=authslice.actions
