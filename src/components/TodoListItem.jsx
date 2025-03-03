import NewTodoList from './NewTodoList';
import TodoTasks from './TodoTasks';

const ListItem = ({ list, onOpenModal, onEditList, onDeletList }) => {
  return (
    <li
      className="bg-gray-800 p-4 rounded-lg cursor-pointer text-gray-500 text-3xl shadow-lg shadow-black hover:-translate-y-1 transition-all duration-150 relative"
      // shadow-[0_0.5rem_1rem_rgba(0,0,0,0.06)]
      onClick={() => onOpenModal(<NewTodoList list={list} onEditList={onEditList} />)}
    >
      <button
        className="absolute right-1 top-2 cursor-pointer text-sm"
        onClick={(e) => {
          e.stopPropagation();
          onDeletList(list.id);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        {/* 🗑️ */}
      </button>
      <h2 className="font-bold">{list.title}</h2>
      <ul>
        {/* {list.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))} */}
      </ul>
      <TodoTasks tasks={list.tasks} />
    </li>
  );
};
export default ListItem;
