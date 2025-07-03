import { useForm } from './useForm';
import { useTodoTask } from './useTodoTask';

export const useTodo = (list, onAddList, onEditList) => {
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

  return {
    title,
    tasks,
    onInputChange,
    onAddTask,
    onDeleteTask,
    onToggleTask,
    onSubmit,
    onResetTasks,
  };
};
