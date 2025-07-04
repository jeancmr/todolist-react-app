import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoListPage, LoginPage, AboutPage, AccountPage, PageNotFoundPage } from './pages';
import { Header, Modal } from './components';
import { useModal } from './hooks';

const App = () => {
  const { isModalOpen, modalContent, handleOpenModal, handleCloseModal } = useModal();

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
