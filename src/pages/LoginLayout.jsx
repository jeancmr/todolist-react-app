import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Register from './RegisterForm';
import PasswordForgotten from './ForgottenPasswordForm';

function LoginLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Detectar si la ruta es para abrir el modal
  const isRegister = location.pathname === '/login/register';
  const isPasswordForgotten = location.pathname === '/login/password-forgotten';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
      <Outlet /> {/* Aquí se renderiza el Login */}
      {/* Si la ruta es register o password-forgotten, mostramos el modal */}
      {(isRegister || isPasswordForgotten) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => navigate('/login')} // Cierra el modal volviendo a /login
            >
              ✖
            </button>
            {isRegister && <Register />}
            {isPasswordForgotten && <PasswordForgotten />}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginLayout;
