import React from 'react';
import { TitleToDo } from '../TitleToDo';
import { ToListCount } from '../ToListCount/ToListCount';
import { ToSearch } from '../ToSearch';
import {ToDo} from '../ToDo';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import {Modal } from '../Modal'
import {ToDoForm} from '../ToDoForm'
import { Context } from '../Context/index'

function AppUI(){
  const {
    filteredTodos, 
    completeToDo, 
    deleteToDo, 
    openModal, 
    setOpenModal} = React.useContext(Context)
  return (
    <>
      <TitleToDo/>
      <ToListCount/>
      <ToSearch/>
      <ToDo>
      {filteredTodos.map((todo) => (
        <ToDoItem
          key={todo.id} // Asegúrate de que cada todo tiene una id única
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeToDo(todo.id)}
          onDelete={() => deleteToDo(todo.id)}
        />
      ))}

      </ToDo>
      <CreateToDoButton
      setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <ToDoForm/>
        </Modal>
      )}
    </>
    );
}

export {AppUI};