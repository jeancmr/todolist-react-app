import TodoTaskItem from './TodoTaskItem';

const TodoTasks = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoTaskItem task={task} key={task.id} />
      ))}
    </ul>
  );
};
export default TodoTasks;
