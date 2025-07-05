export const TodoTaskFormItem = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <li className="text-lg flex gap-2 text-white">
      <input
        type="checkbox"
        checked={task.completed}
        name="todoCheckbox"
        onChange={() => onToggleTask(task.id)}
        className="cursor-pointer mr-2"
      />
      <span
        className={`cursor-default ${task.completed ? 'line-through' : ''}`}
        onClick={() => onToggleTask(task.id)}
      >
        {task.name}
      </span>

      <button className="ml-auto mr-4 cursor-pointer" onClick={() => onDeleteTask(task.id)}>
        &#x2716;
      </button>
    </li>
  );
};
