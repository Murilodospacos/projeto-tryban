import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js/Navbar';
import TaskList from './components/TaskList/TaskList';

// Func - gera um novo ID e acumula no let idAcc
let idAcc = 0;
const generetId = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generetId(),
      title,
      state,
    }
    // Adiciona nova tarefa no tasks através do setTasks
    setTasks((existinTasks) => {
      return [ ...existinTasks, newTask];
    })
  }

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
        title="Pendente"
        onAddTask={ addTask }
        taskState="Pendente"
        tasks={ tasks.filter((t) => t.state === "Pendente") }
        onTaskUpdate={ updateTask }
        />
         <TaskList
        title="Em Andamento"
        onAddTask={ addTask }
        taskState="Em Andamento"
        tasks={ tasks.filter((t) => t.state === "Em Andamento") }
        onTaskUpdate={ updateTask }
        />
         <TaskList
        title="Pronto"
        onAddTask={ addTask }
        taskState="Pronto"
        tasks={ tasks.filter((t) => t.state === "Pronto") }
        onTaskUpdate={ updateTask }
        />
      </div>
      
    </div>
  );
}

export default App;
