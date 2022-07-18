import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskToBoard } from "../redux/actions";
import "../styles/header.scss";

const Header = () => {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput) {
      dispatch(addTaskToBoard(textInput));
      setTextInput("");
    }
  };

  return (
    <div className="header">
      <h1>Планировщик задач</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите задачу..."
          onChange={handleChange}
          value={textInput}
        />
        <button>Добавить</button>
      </form>
    </div>
  );
};

export default Header;
