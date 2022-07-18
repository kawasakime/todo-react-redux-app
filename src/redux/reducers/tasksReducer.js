import { TASK_ADD, TASK_REMOVE, TASK_UPDATE } from "../types";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.data],
      };
    case TASK_UPDATE:
      const index = state.tasks.findIndex((e) => e.id === action.data.id);
      const newTasks = [
        ...state.tasks.slice(0, index),
        action.data,
        ...state.tasks.slice(index + 1),
      ];

      return {
        ...state,
        tasks: newTasks,
      };
    case TASK_REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter((e) => e.id !== action.id),
      };
    default:
      return state;
  }
};

export default tasksReducer;
