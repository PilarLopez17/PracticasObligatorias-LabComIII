import { useState } from 'react';
import PropTypes from 'prop-types';

const NuevaTarea = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTask} onChange={handleChange} placeholder="Ingrese la tarea" />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

NuevaTarea.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NuevaTarea;
