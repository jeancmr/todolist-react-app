import { useState } from 'react';
import Form from '../Form';

const NewTodoList = ({ list, onAddList, onEditList }) => {
  const [tasks, setTasks] = useState(list?.tasks ?? []);
  const [title, setTitle] = useState(list?.title ?? '');

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const handleAddList = () => {
    onAddList({
      id: new Date().getTime().toString(),
      title,
      tasks,
    });
    setTasks([]);
    setTitle('');
  };

  const handleEditList = () => {
    onEditList({
      ...list,
      title,
      tasks,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please enter a title');
      return;
    }

    if (list?.id) {
      handleEditList();
    } else {
      handleAddList();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-800 rounded-lg text-gray-500 flex flex-col gap-3.5"
    >
      <Form onAddList={onAddList} onAddTask={handleAddTask} title={title} onTitle={setTitle} />

      {tasks.length > 0 ? (
        <ul className="flex flex-col gap-2 justify-between">
          {tasks.map((task) => (
            <li key={task.id} className="text-lg flex gap-2 text-white">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <span className={` text-lie ${task.completed ? 'line-through' : ''}`}>
                {task.name}
              </span>
              <button
                className="ml-auto mr-4 cursor-pointer"
                onClick={() => handleDeleteTask(task.id)}
              >
                &#x2716;
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">No tasks</p>
      )}
      {tasks.length > 0 && (
        <button className="bg-green-500 text-white rounded-md cursor-pointer py-2 px-4">
          Save
        </button>
      )}
    </form>
  );
};
export default NewTodoList;
