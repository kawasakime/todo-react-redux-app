import { useState } from "react";

import MoveBtn from "./UI/MoveBtn";
import RemoveBtn from "./UI/RemoveBtn";
import EditBtn from "./UI/EditBtn";
import TextTask from "./UI/TextTask";
import Textarea from "./UI/TextareaTask";
import { useDispatch, useSelector } from "react-redux";
import {
  moveItemToIndex,
  setCurrentBoard,
  setCurrentItem,
} from "../redux/actions";
import MoreBtn from "./UI/MoreBtn";

const Item = ({ item, board }) => {
  const { id, text } = item,
    [taskText, setTaskText] = useState(text),
    [editable, setEditable] = useState(false);

  const currentBoard = useSelector((state) => state.boardsReducer.currentBoard),
    currentItem = useSelector((state) => state.boardsReducer.currentItem);

  const dispatch = useDispatch();

  function removeHereClass() {
    [...document.querySelectorAll(".todo-item")].map((e) =>
      e.classList.remove("here")
    );
  }

  const handlerDragOver = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("todo-item")) {
      e.target.classList.add("here");
    } else if (e.target.parentElement.classList.contains("todo-item")) {
      e.target.parentElement.classList.add("here");
    }
  };

  const handlerDragLeave = (e) => {
    removeHereClass()
  };

  const handlerDragStart = (e, item, board) => {
    dispatch(setCurrentBoard(board));
    dispatch(setCurrentItem(item));
  };

  const handlerDragEnd = (e) => {
    removeHereClass()
  };

  const handlerDrop = (e, item, board) => {
    e.preventDefault();
    e.target.classList.remove("here");
    dispatch(moveItemToIndex(currentBoard, currentItem, board, item));
  };

  return (
    <div
      className="todo-item"
      draggable={true}
      onDragOver={(e) => {
        handlerDragOver(e);
      }}
      onDragLeave={(e) => {
        handlerDragLeave(e);
      }}
      onDragStart={(e) => {
        handlerDragStart(e, item, board);
      }}
      onDragEnd={(e) => {
        handlerDragEnd(e);
      }}
      onDrop={(e) => {
        handlerDrop(e, item, board);
      }}
    >
      {!editable ? (
        <TextTask text={taskText} />
      ) : (
        <Textarea text={taskText} setText={setTaskText} />
      )}
      <MoreBtn />
      <div className="btns">
        {board !== "complete" ? (
          <div>
            <EditBtn
              editable={editable}
              setEditable={setEditable}
              setTaskText={setTaskText}
              item={{ id, text: taskText }}
              board={board}
            />
            <MoveBtn item={{ id, text: taskText }} board={board} />
          </div>
        ) : null}
        <RemoveBtn board={board} item={{ id }} />
      </div>
    </div>
  );
};

export default Item;
