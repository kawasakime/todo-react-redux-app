import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { moveTask } from "../../redux/actions";

const MoveBtn = ({board, item}) => {

  const dispatch = useDispatch();

  const handleMoveTask = () => {
    dispatch(moveTask(board, item));
  };

  return (
    <button className="move" onClick={handleMoveTask}>
      <BsFillArrowRightSquareFill />
    </button>
  );
};

export default MoveBtn;
