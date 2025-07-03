import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Modal from './components/Modal';
import { TodoListPage, LoginPage, AboutPage, AccountPage, PageNotFoundPage } from './pages';
import Header from './components/Header';

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
        <Header />

        <Routes>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/login" element={<LoginPage onOpenModal={handleOpenModal} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
};
export default App;
