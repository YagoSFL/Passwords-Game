import { useCallback } from 'react';
import useNavigate from './useNavigate';
import { LIST_ROUTE } from '../routes';

const useNavigateToList = () => {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate(LIST_ROUTE);
  }, [navigate]);
};

export default useNavigateToList;
