import Form from '../Form';
import { TodoTaskFormList } from './TodoTaskFormList';
import { useTodo } from '../../hooks/useTodo';
import TodoButton from './TodoButton';

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

      <TodoButton>Save</TodoButton>
    </form>
  );
};
export default TodoListForm;
