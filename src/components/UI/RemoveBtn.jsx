import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/actions";

const RemoveBtn = ({ board, item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTask(board, item));
  };

  return (
    <button className="remove" onClick={handleRemove}>
      <AiFillDelete />
    </button>
  );
};

export default RemoveBtn;
