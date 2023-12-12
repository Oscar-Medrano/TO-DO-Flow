import React from 'react';
import { AppUI } from './AppUI';
import { ToDoProvider } from '../Context/index' // Importa ToDoProvider en lugar de Context

function App() {
  return( // Utiliza ToDoProvider en lugar de Context.Provider
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;