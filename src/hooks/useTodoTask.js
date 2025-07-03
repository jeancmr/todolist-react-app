import { useState } from 'react';

export const useTodoTask = (list) => {
  const [tasks, setTasks] = useState(list?.tasks ?? []);

  const onAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const onDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const onToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const onResetTasks = () => {
    setTasks([]);
  };

  return {
    tasks,
    onAddTask,
    onDeleteTask,
    onToggleTask,
    onResetTasks,
  };
};
