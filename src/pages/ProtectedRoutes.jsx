import { useEffect } from 'react';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const {
    state: { isAuthenticated },
  } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : '';
}

export default ProtectedRoutes;
