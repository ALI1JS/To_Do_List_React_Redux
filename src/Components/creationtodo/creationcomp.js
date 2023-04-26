import './creation.css';
import { useDispatch, useSelector } from 'react-redux';
import { taskactions } from '../../TollkitStore/Slices/tasksSlices';
import { checklogin } from '../../TollkitStore/Slices/authslice';

export const CreationTodo=()=>{
      const dispatch=useDispatch();
      const globalstate=useSelector(state=>state);
     //  this logic special for redux
//     const addtask=(ev)=>{
//          ev.preventDefault();
//          let value=document.querySelector('.text-input').value;
//          dispatch({
//             type:ADD,
//             payload:value
//          })
//     }

//  this logic special for  redux tollkit
let id=1;
const addtask=(ev)=>{
 let value=document.querySelector('.text-input').value;
     ev.preventDefault();
     dispatch(taskactions.Add({value,id}));
     id+=1;
}
  const islogin=(ev)=>{
     ev.preventDefault();
    dispatch(checklogin())
  }
    return(
         <div className="creation-todo">
           <a onClick={islogin} href='/login' className='btn btn-primary'>{globalstate.auth.isAuth?"logout":"login"}</a>
           {globalstate.auth.isAuth?(
               <div className="custom-container">
               <h3>manage your tasks</h3>
             <form className="form-custom">
               <input type="text" className="text-input" placeholder="type your task"/>
               <input type="submit" onClick={addtask} className="submit-input" value="add"/>
            </form>
   </div>
           ):(<span className="text-primary px-3 text-capitalize fs-2">Its for free try It</span>)}
              
              
         </div>
    )
}
