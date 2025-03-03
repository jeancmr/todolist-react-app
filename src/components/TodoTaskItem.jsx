const TaskItem = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <li className="text-lg flex gap-2 text-white">
      {/* <input type="checkbox" checked={task.completed} onChange={() => onToggleTask(task.id)} /> */}
      <span className={` text-lie ${task.completed ? 'line-through' : ''}`}>{task.name}</span>
      {/* <button className="ml-auto mr-4 cursor-pointer" onClick={() => onDeleteTask(task.id)}>
        &#x2716;
      </button> */}
    </li>
  );
};

export default TaskItem;
