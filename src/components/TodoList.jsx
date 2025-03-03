import TaskItem from './TaskItem';

const TodoList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <ul className=" mx-auto w-2xl grid grid-cols-3 gap-4 mt-9">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};
export default TodoList;
