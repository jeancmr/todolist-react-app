import TodoListItem from './TodoListItem';

const TodoLists = ({ lists, onEditList, onOpenModal, onDeletList }) => {
  return (
    <ul className="w-3xl mx-auto grid grid-cols-4 gap-4 mt-9 ">
      {lists.length > 0 ? (
        lists.map((list) => (
          <TodoListItem
            key={list.id}
            list={list}
            onOpenModal={onOpenModal}
            onEditList={onEditList}
            onDeletList={onDeletList}
          />
        ))
      ) : (
        <li className="col-span-4 bg-gray-800 p-4 rounded-md text-center text-white">
          No lists found
        </li>
      )}
    </ul>
  );
};
export default TodoLists;
