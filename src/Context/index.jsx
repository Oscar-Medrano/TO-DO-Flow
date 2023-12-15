import React from 'react';
import {useLocalStorage} from './useLocalStorage'

const Context = React.createContext();

function ToDoProvider({ children }){

    const [todos, saveToDos] = useLocalStorage('TODOS_V1', []); 

    const [openModal, setOpenModal] = React.useState(false)
    
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

    const addTodo = (text)=> {
        const newTodo = [...todos];
        
        newTodo.push({
            id: new Date().toISOString(), // Añade un identificador único a cada todo
            text,
            completed: false,
        });
        saveToDos(newTodo);
    }
    
    const completeToDo = (id) => {
        const newTodo = [...todos];
        const toDoIndex = newTodo.findIndex(
            (todo) => todo.id === id // Usa el id en lugar del texto para encontrar el todo
        );
        newTodo[toDoIndex].completed = true;
        saveToDos(newTodo);
    }
    
    const deleteToDo = (id) => {
        const newTodo = [...todos];
        const toDoIndex = newTodo.findIndex(
          (todo) => todo.id === id // Usa el id en lugar del texto para encontrar el todo
        );
        newTodo.splice(toDoIndex, 1);
        saveToDos(newTodo);
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
            setOpenModal,
            addTodo,
        }}>
            { children } 
        </Context.Provider>
    );
}

export {Context, ToDoProvider}