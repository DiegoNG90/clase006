import './App.css';
import {useReducer} from 'react'
import {taskReducer, initialState} from './reducers/tasks'
import { SET_TASKS } from './actions/tasks';

import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  console.log("state", state)

  const addTask = (task) => {
    dispatch({type:SET_TASKS, payload: task})
  }

  if(state.loading) return <h3>Cargando...</h3>

  return (
    <div className="App">
      < TaskForm addTask={addTask} />
      < TaskList tasks={state.tasks} />
    </div>
  );
}

export default App;
