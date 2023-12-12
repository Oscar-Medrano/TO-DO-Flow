import React from 'react';
import './CreateToDoButton.css'

function CreateToDoButton(){
    return(
        <button className='ToDoButton' type="button"
        onClick = {
            (event) =>{ 
                console.log("You clicked the buttom")
                console.log(event);
                console.log(event.target);
            }
        }> + </button>
    )
}

export { CreateToDoButton };