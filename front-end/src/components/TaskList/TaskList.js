import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {

  // func - chama onAddTask passando parametros e executa no onclick do button
  const addTask = () => {
    onAddTask("Nova Tarefa", "Pendente");
  }

  return (
    <div className="tasklist">
      <div className="title">{ title }</div>
      <div className="content">
        { tasks.map((task) => {
          return <div key={ task.id }>{task.title}</div>
        })}
      </div>
      <button onClick={ addTask }>Adiciona Tarefa</button>
    </div>
  );
};

TaskList.protoTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
} 
