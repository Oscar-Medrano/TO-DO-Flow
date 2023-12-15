import React from "react";
import "./ToDoForm.css";
import { Context } from '../Context';


function ToDoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(Context);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>

    <label>Enter your To-Do</label>

    <textarea
        placeholder="Write Your To-Do here"
        value={newTodoValue}
        onChange={onChange}
    />

            
    <div className="TodoForm-buttonContainer">
        <button
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}>Cancel</button>

        <button
        type="submit"
        className="TodoForm-button TodoForm-button--add">Add</button>
    </div>

    </form>
  );
}

export { ToDoForm }