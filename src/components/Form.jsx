import { useForm } from '../hooks';

const Form = ({ title, onTitleChange, onAddTask }) => {
  const { newTaskInput, onInputChange, onResetForm } = useForm({
    newTaskInput: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!newTaskInput) return;

    const newTask = {
      id: new Date().getTime().toString(),
      name: newTaskInput,
      completed: false,
    };

    onAddTask(newTask);
    onResetForm();
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
          name="newTaskInput"
          placeholder="Add a new item"
          value={newTaskInput}
          onChange={onInputChange}
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
