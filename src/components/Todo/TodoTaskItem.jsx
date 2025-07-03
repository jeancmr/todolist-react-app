const TaskItem = ({ task }) => {
  return (
    <li className="text-lg flex gap-2 text-white">
      <span className={` text-lie ${task.completed ? 'line-through' : ''}`}>{task.name}</span>
    </li>
  );
};

export default TaskItem;
