import React from 'react';
import "./ToListCount.css"
import {Context} from '../Context'

function ToListCount() {
  const {completedTodos, totalTodos,} = React.useContext(Context)

  let message = '';
  if (completedTodos < totalTodos) {
      message = `You have completed ${completedTodos} of ${totalTodos} Goals`;
  } else if (totalTodos === completedTodos && totalTodos !== 0) {
      message = `¡Congratulations you have finished all your goals for today! 🥳.`;
  } else if (totalTodos === 0) {
      message = `Insert a new goal in the plus button 👇🏻`;
  }

  return (
    <h1 className="ToListCount">
      {message}
    </h1>
  );
  }

export { ToListCount };