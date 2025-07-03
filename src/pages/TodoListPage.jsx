import Footer from '../components/Footer';
import Header from '../components/Header';
import Modal from '../components/Modal';
import NewTodoList from '../components/NewTodoList';
import TodoLists from '../components/TodoLists';
import { useModal } from '../hooks/useModal';
import { useTodoList } from '../hooks/useTodoList';

const TodoListPage = () => {
  const { modalContent, isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const { todoLists, handleAddList, handleEditList, handleDeleteList } =
    useTodoList(handleCloseModal);

  return (
    <>
      <Header />

      <main className="bg-gray-900 h-screen">
        <div className="bg-gray-950 p-6 flex justify-center">
          <button
            className="bg-green-500 text-white rounded-md cursor-pointer py-2 px-4"
            onClick={() => handleOpenModal(<NewTodoList onAddList={handleAddList} />)}
          >
            Create new list
          </button>
        </div>

        <TodoLists
          lists={todoLists}
          onOpenModal={handleOpenModal}
          onEditList={handleEditList}
          onDeletList={handleDeleteList}
        />
      </main>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
};
export default TodoListPage;
