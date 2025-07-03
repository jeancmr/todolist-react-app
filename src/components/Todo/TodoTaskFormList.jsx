export const TodoTaskFormList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <ul className="flex flex-col gap-2 justify-between">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id} className="text-lg flex gap-2 text-white">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <span className={` text-lie ${task.completed ? 'line-through' : ''}`}>{task.name}</span>
            <button className="ml-auto mr-4 cursor-pointer" onClick={() => onDeleteTask(task.id)}>
              &#x2716;
            </button>
          </li>
        ))
      ) : (
        <li className="text-white">No tasks available</li>
      )}
    </ul>
  );
};
