import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Modal from './components/Modal';
import Login from './pages/Login';
import Pagenotfound from './pages/Pagenotfound';
import Account from './pages/Account';
import About from './pages/About';
import TodoListPage from './pages/TodoListPage';

const App = () => {
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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/login" element={<Login onOpenModal={handleOpenModal} />} />

          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
};
export default App;
