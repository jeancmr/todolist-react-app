import { useState } from 'react';

const Form = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    onAddTask({ id: Date.now(), name: input, completed: false });
    setInput('');
  };
  return (
    <form onSubmit={onSubmit} className="bg-gray-950 p-6 flex justify-center">
      <input
        type="text"
        name="input"
        placeholder="Add a new item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border border-gray-400 rounded-md mr-7 text-white"
      />
      <button className="bg-green-500 text-white rounded-md cursor-pointer py-2 px-4">Add</button>
    </form>
  );
};
export default Form;
