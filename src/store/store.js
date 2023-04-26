import { legacy_createStore as createStore} from "redux";
import { TaskReducer } from "./Reducers/taskreducer";

export const store=createStore(TaskReducer)