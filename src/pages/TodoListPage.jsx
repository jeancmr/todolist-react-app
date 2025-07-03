import { useModal, useTodoList } from '../hooks/';
import { Modal, Footer } from '../components';
import { TodoListForm, TodoLists } from '../components/Todo';

export const TodoListPage = () => {
  const { modalContent, isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  const { todoLists, handleAddList, handleEditList, handleDeleteList } =
    useTodoList(handleCloseModal);

  return (
    <>
      <main className="bg-gray-900 h-screen">
        <div className="bg-gray-950 p-6 flex justify-center">
          <button
            className="bg-green-500 text-white rounded-md cursor-pointer py-2 px-4"
            onClick={() => handleOpenModal(<TodoListForm onAddList={handleAddList} />)}
          >
            Create new list
          </button>
        </div>

        <TodoLists
          lists={todoLists}
          onOpenModal={handleOpenModal}
          onEditList={handleEditList}
          onDeleteList={handleDeleteList}
        />
      </main>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
};
