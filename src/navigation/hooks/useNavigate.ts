import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push, replace } from 'connected-react-router';

type NavigateOptions = {
  replace: boolean,
};

function getNavigateActionCreator(options?: NavigateOptions): Function {
  if (options && options.replace) {
    return replace;
  }
  return push;
}

type NavigateFn = (pathname: string, state?: any) => void;

function useNavigate(options?: NavigateOptions): NavigateFn {
  const dispatch = useDispatch();
  const actionCreator = getNavigateActionCreator(options);
  return useCallback((pathname, state?: any) => {
    dispatch(actionCreator({
      pathname,
      state,
    }));
  }, [actionCreator, dispatch]);
}

export default useNavigate;
