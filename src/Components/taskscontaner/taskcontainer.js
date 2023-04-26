import "./taskcontainer.css";
import { useSelector,useDispatch } from "react-redux";
// import { taskactions } from "../../TollkitStore/Slices/tasksSlices";

export const TaskContainer=()=>{
    // const dispatch = useDispatch();

    const alltasks=useSelector(state=>{
        if(state.length===0){
            return "NO TASKS";
        }else{
            
            return state.tasks.tasks;
        }
    })
    // const RemoveTask=(id)=>{
    //    dispatch(taskactions.Remove(id))
    // }
    
    return(
         <div className="tasks">
             <div className="container">
                   <ul className="list">
                    {alltasks.map((task)=>
                          <li className="task" key={task.id}>
                          <p className="task-content" >{task.task +task.id}</p>
                           <div className="control">
                              <i>edit</i> 
                              <i>Delete</i> 
                           </div>
                           </li>
                    )}
                   </ul>
             </div>
         </div>
    )
}