import {SET_TASKS, GET_TASKS, UPDATE_TASKS, DELETE_TASKS} from '../actions/tasks'

/*
INTERFAZ
tasks: [{id: string, name: String, description: String, done: boolean}]
loading: true/false
owner: {id: String, name: String, mail: String}
*/

const initialState = {
    tasks: [],
    selectedTask: {},
    loading: false,
    owner: {id: 1, name: "Diego", mail: "diegs@gmail.com"}
}

// REDUCER

export const taskReducer = (state = initialState,action ) => {
    switch (action.type) {
      case SET_TASKS:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case GET_TASKS:
        const selectedTask = state.tasks.find(
          (task) => task.id === action.payload.id
        );
        return {
          ...state,
          selectedTask,
        };
      case DELETE_TASKS:
        const newTasks = state.tasks.filter(
          (task) => task.id !== action.payload.id
        );
        return {
          ...state,
          tasks: newTasks,
        };
    //   case UPDATE_TASKS:
    //     const targetTask = state.tasks.find(
    //       (task) => task.id === action.payload.id
    //     );
    //     const _index = state.tasks.indexOf(targetTask);
      default:
        return state;
    }
}