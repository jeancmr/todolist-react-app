import { useState } from 'react';
import Header from '../components/Header';
import TodoLists from '../components/TodoLists';
import todoLists from '../data/data';
import Modal from '../components/Modal';
import NewTodoList from '../components/NewTodoList';
import Footer from '../components/Footer';

const TodoListPage = () => {
  const [lists, setLists] = useState(todoLists);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleAddList = (list) => {
    setLists((prevTasks) => [...prevTasks, list]);
  };

  const handleEditList = (list) => {
    setLists((prevTasks) =>
      prevTasks.map((prevList) => (prevList.id === list.id ? list : prevList))
    );
  };

  const handleDeleteList = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this list?');
    if (confirmed) setLists((prevTasks) => prevTasks.filter((list) => list.id !== id));
  };

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
          lists={lists}
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
