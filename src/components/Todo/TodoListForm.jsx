import Form from '../Form';
import { useForm } from '../../hooks';
import { useTodoTask } from '../../hooks/useTodoTask';
import { TodoTaskFormList } from './TodoTaskFormList';

const TodoListForm = ({ list, onAddList, onEditList }) => {
  const { tasks, onAddTask, onDeleteTask, onToggleTask, onResetTasks } = useTodoTask(list);
  const { title, onInputChange, onResetForm } = useForm({
    title: list?.title ?? '',
  });

  const handleAddList = () => {
    onAddList({
      id: new Date().getTime().toString(),
      title,
      tasks,
    });
    onResetTasks();
    onResetForm();
  };

  const handleEditList = () => {
    onEditList({
      ...list,
      title,
      tasks,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please enter a title');
      return;
    }

    if (list?.id) {
      handleEditList();
    } else {
      handleAddList();
    }
  };

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
