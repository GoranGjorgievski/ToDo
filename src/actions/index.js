import {
  ADD_TODO,
  TOGGLE_TO_DO_STATUS,
  CHANGE_FILTER,
  DELETE_TO_DO,
  EDIT_TO_DO,
  MARK_ALL_COMPLETED,
} from '../constants';

let nextId = 1;
export const addToDo = (description) => {
  return {
    type: ADD_TODO,
    payload: {
      description,
      id: nextId++,
    },
  };
};

export const toggleToDoStatus = (id) => {
  return {
    type: TOGGLE_TO_DO_STATUS,
    payload: {
      id,
    },
  };
};

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: {
      filter,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TO_DO,
    payload: {
      id,
    },
  };
};

export const editToDo = (data) => {
  return {
    type: EDIT_TO_DO,
    payload: {
      ...data,
    },
  };
};

export const markAllCompleted = () => {
  return {
    type: MARK_ALL_COMPLETED,
  };
};
