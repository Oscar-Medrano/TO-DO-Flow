import React from 'react';
import "./ToListCount.css"
import {Context} from '../Context'

function ToListCount() {
  const {completedTodos, totalTodos,} = React.useContext(Context)

  let message = '';
  if (completedTodos < totalTodos) {
      message = `You have finished ${completedTodos} of ${totalTodos} To-Do's`;
  } else if (totalTodos === completedTodos && totalTodos !== 0) {
      message = `¡Congratulations you have finished all your To-Do's for today! 🥳.`;
  } else if (totalTodos === 0) {
      message = `Insert a new To-Do in the plus button`;
  }

  return (
    <h1 className="ToListCount">
      {message}
    </h1>
  );
  }

export { ToListCount };