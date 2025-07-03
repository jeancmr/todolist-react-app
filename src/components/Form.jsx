import { useState } from 'react';

const Form = ({ title, onTitleChange, onAddTask }) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    const newTask = {
      id: new Date().getTime().toString(),
      name: input,
      completed: false,
    };

    onAddTask(newTask);
    setInput('');
  };

  return (
    <aside>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
        className="p-2 text-2xl w-auto border-none rounded-md text-white focus:outline-none title-form"
      />

      <div className="tasks flex justify-center">
        <input
          type="text"
          name="input"
          placeholder="Add a new item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 border border-gray-400 rounded-md mr-7 text-white"
        />
        <button
          className="bg-green-500 text-white rounded-md cursor-pointer py-2 px-4"
          onClick={onSubmit}
        >
          Add
        </button>
      </div>
    </aside>
  );
};
export default Form;
