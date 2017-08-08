/* NOTE : Since it is only one simple app I am not using combineReducers */

import {
  ADD_TODO,
  TOGGLE_TO_DO_STATUS,
  CHANGE_FILTER,
  DELETE_TO_DO,
  EDIT_TO_DO,
  MARK_ALL_COMPLETED,
} from '../constants';

const INITIAL_STATE = {
  todos: [
    {
      id: 0,
      description: 'This is a test TO DO',
      status: 0,
    },
  ],
  filter: 2, // 0 - Active, 1 - Completed, 2 - All
};

const todo = {
  /* Adds a new To Do in the list */
  [ADD_TODO]: (state, action) => {
    const newToDo = {
      id: action.payload.id,
      description: action.payload.description,
      status: 0,
    };
    return {
      ...state,
      todos: [...state.todos, newToDo],
    };
  },
  /* Change Completed or Active To do status */
  [TOGGLE_TO_DO_STATUS]: (state, action) => {
    const tmpTodos = state.todos.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          status: 1 - item.status,
        };
      }

      return item;
    });
    return {
      ...state,
      todos: [...tmpTodos],
    };
  },
  /* Change current filter of To Do list */
  [CHANGE_FILTER]: (state, action) => {
    return {
      ...state,
      filter: parseInt(action.payload.filter, 10),
    };
  },

  /* delete a TODO */
  [DELETE_TO_DO]: (state, action) => {
    const filteredTodos = state.todos.filter((item) => {
      return item.id !== action.payload.id;
    });
    return {
      ...state,
      todos: [...filteredTodos],
    };
  },

  /* edit a TODO */
  [EDIT_TO_DO]: (state, action) => {
    const tmpTodos = state.todos.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          description: action.payload.description,
        };
      }

      return item;
    });
    return {
      ...state,
      todos: [...tmpTodos],
    };
  },

  /* Mark all TODO as completed */
  [MARK_ALL_COMPLETED]: (state) => {
    const completedTodos = state.todos.map((item) => {
      return {
        ...item,
        status: 1,
      };
    });

    return {
      ...state,
      todos: [...completedTodos],
    };
  },
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  const fn = todo[action.type];
  return fn ? fn(state, action) : state;
}
