import NewTodoList from './NewTodoList';
import TodoTasks from './TodoTasks';

const ListItem = ({ list, onOpenModal, onEditList, onDeleteList }) => {
  return (
    <li
      className="bg-gray-800 p-4 rounded-lg cursor-pointer text-gray-500 text-3xl shadow-lg shadow-black hover:-translate-y-1 transition-all duration-150 relative"
      onClick={() => onOpenModal(<NewTodoList list={list} onEditList={onEditList} />)}
    >
      <button
        className="absolute right-1 top-2 cursor-pointer text-md text-red-500"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteList(list.id);
        }}
      >
        &times;
      </button>
      <h2 className="font-bold">{list.title}</h2>
      <TodoTasks tasks={list.tasks} />
    </li>
  );
};
export default ListItem;
