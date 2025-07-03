import { TodoTaskFormItem } from './TodoTaskFormItem';

export const TodoTaskFormList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <ul className="flex flex-col gap-2 justify-between">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoTaskFormItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      ) : (
        <li className="text-white">No tasks available</li>
      )}
    </ul>
  );
};
