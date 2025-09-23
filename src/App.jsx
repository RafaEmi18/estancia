import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import Login from './components/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar si ya hay una sesión activa al cargar la aplicación
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('authToken', 'user-authenticated');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  // Mostrar carga mientras se verifica el estado de autenticación
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <AppRoutes onLogout={handleLogout} />
        )}
      </div>
    </Router>
  );
}

export default App;