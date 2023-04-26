//import  legacy code 
// import {legacy_createStore as createStore} from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";
import { TaskSlice } from "./Slices/tasksSlices";
import { authslice } from "./Slices/authslice";
export const toolkitstore=configureStore({
    reducer:{tasks:TaskSlice.reducer,auth:authslice.reducer}
})