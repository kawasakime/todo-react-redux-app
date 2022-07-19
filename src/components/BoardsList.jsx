import { useSelector } from "react-redux";
import Container from "./Container";

const BoardsList = () => {
  const boards = useSelector((state) => state.boardsReducer.boards);
  const itemsCount = useSelector(state => state.boardsReducer.itemsCount)

  const saveToLocalStorage = () =>{
    localStorage.setItem('boards', JSON.stringify(boards))
    localStorage.setItem('itemsCount', itemsCount)
  }
  saveToLocalStorage()

  return (
    <div className="todo-wrapper">
      {Object.keys(boards).map((board) => {
        return (
          <Container key={board} board={{ id: board, ...boards[board] }} />
        );
      })}
    </div>
  );
};

export default BoardsList;
