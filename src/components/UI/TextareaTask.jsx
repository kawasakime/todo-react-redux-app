import { useRef } from "react";
import { resize, setCursorToEnd, replaceText} from "../../utils/scripts";

const Textarea = ({ text, setText }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setText(replaceText(e.target.value));
    resize(e);
  };

  const task = useRef(null);

  return (
    <textarea
      ref={task}
      autoFocus
      className="task"
      value={text}
      onChange={handleChange}
      onFocus={(e) => {
        setCursorToEnd(e, text)
        resize(e);
      }}
    ></textarea>
  );
};

export default Textarea;
