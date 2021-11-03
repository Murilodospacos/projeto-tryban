import React, { useState, useEffect } from 'react';

function ListTasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then((data) => data.json())
      .then((task) => setTasks(task))
      .catch((e) => {
        console.log('Deu pau na hora de consumir a API!');
      })
  }, [])

  return (
    <ul>
      {
        tasks.map((t) => (
          <li key={ t.id }>Nome: { t.name } | Tarefa: { t.task } </li>
        ))
      }
    </ul>
  );
}

export default ListTasks;
