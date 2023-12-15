import React from 'react';
import './CreateToDoButton.css'

function CreateToDoButton({ setOpenModal }){
    return (
        <button
          className="CreateToDoButton"
          onClick={
            () => {
              setOpenModal(state => !state);
            }
          }
        >+</button>
      );
}

export { CreateToDoButton };