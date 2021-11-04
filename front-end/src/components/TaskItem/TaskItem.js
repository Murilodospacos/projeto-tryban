import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TaskItem({ id, title, taskState }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitleTask, setEditableTitleTask] = useState(title);

  const onTitleChangeTask = (event) => {
    const newTitleTask = event.target.value;
    setEditableTitleTask(newTitleTask)
  }

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  }

  if (isEditing) {
    return (
      <input
        type="text"
        value={ editableTitleTask }
        onChange={ onTitleChangeTask }
        onKeyPress={ onKeyPress }
      />
      );
    } else {
      return <div onClick={ () => setIsEditing(true) }> { editableTitleTask } </div>
    }
}

TaskItem.protoTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
}