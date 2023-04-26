import './App.css';
import { CreationTodo } from './Components/creationtodo/creationcomp';
import { TaskContainer } from './Components/taskscontaner/taskcontainer';

function App() {
  return (
    <div className="App">
      <h2>redux todo app</h2> 
       <CreationTodo/>
       <TaskContainer/>
    </div>
  );
}

export default App;
