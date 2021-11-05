import React, { useState } from "react";
import PropTypes from "prop-types";
import "./taskitem.css";

export default function TaskItem({ id, title, taskState, onTaskUpdate, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitleTask, setEditableTitleTask] = useState(title);

  const onTitleChangeTask = (event) => {
    const newTitleTask = event.target.value;
    setEditableTitleTask(newTitleTask);
    onTaskUpdate(id, newTitleTask, taskState);
  }

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      if (editableTitleTask.length === 0) {
        onDeleteTask(id);
      }
    }
  }

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  }

  if (isEditing) {
    return (
      <div className="taskitem">
        <input
          type="text"
          value={ editableTitleTask }
          onChange={ onTitleChangeTask }
          onKeyPress={ onKeyPress }
        />
      </div>
      );
    } else {
      return(
        <div className="taskitem">
          <div onClick={ (e) => setIsEditing(true) }> { editableTitleTask } </div>
          <select onChange={ onTaskStateChange }  value={ taskState } >
            <option value="Pendente">Pendente</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Pronto">Pronto</option>
          </select>
        </div>
      );
    }
}

TaskItem.protoTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
}