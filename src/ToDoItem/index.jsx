import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './ToDoItem.css';

function ToDoItem(props) {
  return (
    <div className="ToDoItem">
      <div className="IconContainer">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <DeleteIcon
          onDelete={props.onDelete}
        />
      </div>
      <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>
        {props.text}
      </p>
    </div>
  );
}

export { ToDoItem };