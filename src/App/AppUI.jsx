import React from 'react';
import { ToListCount } from '../ToListCount/ToListCount';
import { ToSearch } from '../ToSearch';
import {ToDo} from '../ToDo';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Context } from '../Context/index'
import {Modal } from '../Modal'

function AppUI(){
  const {filteredTodos, completeToDo, deleteToDo, openModal, setOpenModal} = React.useContext(Context)
  return (
    <>
      <ToListCount/>
      <ToSearch/>
      <ToDo>
        {filteredTodos.map(toDo =>(
        <ToDoItem key={toDo.text} 
        text={toDo.text}
        completed={toDo.completed}
        onComplete={() => completeToDo(toDo.text)}
        onDelete={() => deleteToDo(toDo.text)}
        />
        ))}
      </ToDo>
      <CreateToDoButton/>

      {openModal && (
        <Modal>
          <p>La funcionalidad de agregar ToDos</p>
        </Modal>
      )}
    </>
    );
}

export {AppUI};