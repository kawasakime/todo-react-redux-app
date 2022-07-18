import React from "react";
import Item from "./Item";

import "../styles/todoContainer.scss";
import { useDispatch, useSelector } from "react-redux";
import { moveItemToIndex } from "../redux/actions";

const Container = ({ board }) => {
  const { id, title, items } = board;
  const currentBoard = useSelector((state) => state.boardsReducer.currentBoard),
    currentItem = useSelector((state) => state.boardsReducer.currentItem);

  const dispatch = useDispatch();

  const handlerDragOver = (e) => {
    e.preventDefault();
  };

  const handlerDrop = (e) => {
    if (board.items.length === 0)
      dispatch(moveItemToIndex(currentBoard, currentItem, board.id));
  };

  return (
    <div
      className="todo-container"
      id={id}
      onDragOver={(e) => handlerDragOver(e)}
      onDrop={(e) => handlerDrop(e)}
    >
      <h1>{title}</h1>
      {items.length ? (
        items.map((task) => {
          return <Item key={task.id} item={{ ...task }} board={id} />;
        })
      ) : (
        <p>Пусто...</p>
      )}
    </div>
  );
};

export default Container;
