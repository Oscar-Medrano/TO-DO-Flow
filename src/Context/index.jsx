import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const Context = React.createContext();

function ToDoProvider({ children }){
    const defaultToDo = [
        {text: "Welcome to Wish List!", completed: false},
        {text: "You can create your goals with the ➕ buttom", completed: false},
        {text: "When you finish your goal, cross it off with ✅ ", completed: false},
        {text: "If you don't like one of your goals, erease it with ❌", completed: false},
        {text: "Find your goals with the navbar", completed: false},
        {text: "Developed by Oscar Medrano", completed: true},
      ];
    
    const [todos, saveToDos] = useLocalStorage('TODOS_V1', defaultToDo); // Use the hook here

    const [openModal, setOpenModal] = React.useState(true) //Initial Value = False === closed window
    
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    
    const [searchValue, setSearchValue] = React.useState('')

    const filteredTodos = todos.filter(
    (todo) => {
        const toDoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return toDoText.includes(searchText);
    }  
    )
    
    const completeToDo = (text) => {
        const newTodo = [...todos];
        const toDoIndex = newTodo.findIndex(
            (todo) => todo.text === text
        );
        newTodo[toDoIndex].completed = true;
        saveToDos (newTodo); //when we Used setTodos Now we use saveToDos
    }
    
    const deleteToDo = (text) => {
        const newTodo = [...todos];
        const toDoIndex = newTodo.findIndex(
          (todo) => todo.text === text
        );
        newTodo.splice(toDoIndex, 1);
        saveToDos (newTodo);//when we Used setTodos Now we use saveToDos
    }

    return(
        <Context.Provider value = {{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal
        }}>
            { children } 
        </Context.Provider>//Every component in children it's allowded to use the props in value = {}
    );
}

export {Context, ToDoProvider}