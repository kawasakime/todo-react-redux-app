import {
  ADD_TASK_TO_BOARD,
  MOVE_ITEM_TO_INDEX,
  MOVE_TASK,
  REMOVE_TASK,
  SET_CURRENT_BOARD,
  SET_CURRENT_ITEM,
  UPDATE_TASK,
} from "./types";

export const addTaskToBoard = (text) => {
  return {
    type: ADD_TASK_TO_BOARD,
    text,
  };
};

export const moveTask = (board, item) => {
  return {
    type: MOVE_TASK,
    board,
    item,
  };
};

export const updateTask = (board, item) => {
  return {
    type: UPDATE_TASK,
    board,
    item,
  };
};

export const removeTask = (board, item) => {
  return {
    type: REMOVE_TASK,
    board,
    item,
  };
};

export const setCurrentBoard = (board) => {
  return {
    type: SET_CURRENT_BOARD,
    board,
  };
};

export const setCurrentItem = (item) => {
  return {
    type: SET_CURRENT_ITEM,
    item,
  };
};

export const moveItemToIndex = (board, item, toBoard, toItem=null) => {
  return {
    type: MOVE_ITEM_TO_INDEX,
    board,
    item,
    toBoard,
    toItem,
  };
};

