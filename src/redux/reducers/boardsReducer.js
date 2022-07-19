import {
  ADD_TASK_TO_BOARD,
  MOVE_ITEM_TO_INDEX,
  MOVE_TASK,
  REMOVE_TASK,
  SET_CURRENT_BOARD,
  SET_CURRENT_ITEM,
  UPDATE_TASK,
} from "../types";

const lsBoards = localStorage.getItem("boards"),
      lsItemsCount = +localStorage.getItem("itemsCount");

const initialState = {
  boards: lsBoards
    ? JSON.parse(lsBoards)
    : {
        todo: {
          title: "Список задач",
          items: [],
        },
        inProgress: {
          title: "На выполнени",
          items: [],
        },
        complete: {
          title: "Выполнены",
          items: [],
        },
      },
  itemsCount: lsItemsCount ? lsItemsCount : 0,
  currentBoard: "",
  currentItem: {},
};

const boardsReducer = (state = initialState, action) => {
  const boards = { ...state.boards },
    keys = Object.keys(boards),
    board = action.board,
    item = action.item;

  function findItemIndex(b = board, i = item) {
    return boards[b].items.findIndex((e) => e.id === i.id);
  }

  function removeItem() {
    boards[board].items.splice(findItemIndex(), 1);
  }

  switch (action.type) {
    case ADD_TASK_TO_BOARD:
      boards.todo.items.push({
        id: state.itemsCount,
        text: action.text,
      });

      return {
        ...state,
        boards: boards,
        itemsCount: state.itemsCount + 1,
      };
    case MOVE_TASK:
      removeItem();
      const newBoardId = keys[keys.findIndex((e) => e === board) + 1];

      boards[newBoardId].items = [...boards[newBoardId].items, item];

      return {
        ...state,
        boards: boards,
      };
    case UPDATE_TASK:
      boards[board].items[findItemIndex()].text = item.text;

      return {
        ...state,
        boards: boards,
      };
    case REMOVE_TASK:
      removeItem();
      return {
        ...state,
        boards: boards,
      };
    case SET_CURRENT_BOARD:
      return {
        ...state,
        currentBoard: action.board,
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.item,
      };
    case MOVE_ITEM_TO_INDEX:
      removeItem();

      const toBoard = action.toBoard,
        toItem = action.toItem;
      let toIndex;

      if (toItem) toIndex = findItemIndex(toBoard, toItem) + 1;
      else toIndex = 0;

      boards[toBoard].items.splice(toIndex, 0, item);

      return {
        ...state,
        boards: boards,
      };
    default:
      return state;
  }
};

export default boardsReducer;
