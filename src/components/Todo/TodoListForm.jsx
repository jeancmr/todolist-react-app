import Form from '../Form';
import { TodoTaskFormList } from './TodoTaskFormList';
import { useTodo } from '../../hooks/useTodo';

const TodoListForm = ({ list, onAddList, onEditList }) => {
  const { tasks, onAddTask, onDeleteTask, onToggleTask, title, onInputChange, onSubmit } = useTodo(
    list,
    onAddList,
    onEditList
  );

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-800 rounded-lg text-gray-500 flex flex-col gap-3.5"
    >
      <Form
        onAddList={onAddList}
        onAddTask={onAddTask}
        title={title}
        onTitleChange={onInputChange}
      />

      <TodoTaskFormList tasks={tasks} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />

      <button className="bg-green-500 text-white rounded-md cursor-pointer py-2 px-4">Save</button>
    </form>
  );
};
export default TodoListForm;
