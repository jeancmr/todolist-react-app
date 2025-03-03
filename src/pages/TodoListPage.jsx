import { useState } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

const todoListTasks = [
  { id: 1, name: 'Buy milk', completed: false },
  { id: 2, name: 'Buy eggs', completed: true },
  { id: 3, name: 'Buy bread', completed: false },
];

const TodoListPage = () => {
  const [tasks, setTasks] = useState(todoListTasks);

  const handleToggleTask = (id) => {
    setTasks((prevTask) =>
      prevTask.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleDeleteTask = (id) => [
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id)),
  ];

  return (
    <>
      <Header />

      <main className="bg-gray-900 h-screen">
        <Form onAddTask={handleAddTask} />

        <TodoList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
      </main>
    </>
  );
};
export default TodoListPage;
