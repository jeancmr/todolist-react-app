import { useReducer, useState } from 'react';
import Header from '../components/Header';
import TodoLists from '../components/TodoLists';
import todoListsData from '../data/data';
import Modal from '../components/Modal';
import NewTodoList from '../components/NewTodoList';
import Footer from '../components/Footer';
import { todoListReducer } from './todoListReducer';
import { useModal } from '../hooks/useModal';

const TodoListPage = () => {
  const [todoLists, dispatch] = useReducer(todoListReducer, todoListsData);
  const { isModalOpen, modalContent, handleOpenModal, handleCloseModal } = useModal();

  const handleAddList = (list) => {
    const action = {
      type: 'ADD_LIST',
      payload: list,
    };
    dispatch(action);
    handleCloseModal();
  };

  const handleEditList = (list) => {
    const action = {
      type: 'EDIT_LIST',
      payload: list,
    };
    dispatch(action);
    handleCloseModal();
  };

  const handleDeleteList = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this list?');
    if (confirmed) {
      const action = {
        type: 'DELETE_LIST',
        payload: id,
      };
      dispatch(action);
    }
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
