import { useCallback } from 'react';
import useNavigate from './useNavigate';
import { MAIN_ROUTE } from '../routes';

const useNavigateToGame = () => {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate(MAIN_ROUTE);
  }, [navigate]);
};

export default useNavigateToGame;
