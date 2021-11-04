import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js/Navbar';
import TaskList from './components/TaskList/TaskList';

const task = {
  id: 0,
  title: 'Nova Tarefa',
  state: 'pendente'
}

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

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente" onAddTask={ addTask } tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
