import { BsFillCheckSquareFill, BsFillPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/actions";
import { replaceText } from "../../utils/scripts";

const EditBtn = (props) => {
  const dispatch = useDispatch();
  const editable = props.editable;

  const handleUdpate = () => {
    props.setTaskText(replaceText(props.item.text))
    if (editable) dispatch(updateTask(props.board, props.item));
    props.setEditable(!editable);
  };

  return (
    <button className="edit" onClick={handleUdpate}>
      {editable ? (
        <BsFillCheckSquareFill className="done" />
      ) : (
        <BsFillPencilFill />
      )}
    </button>
  );
};

export default EditBtn;
