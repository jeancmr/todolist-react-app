import { useEffect, useReducer } from 'react';
import { todoListReducer } from '../utils/todoListReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todoLists')) || [];
};

export const useTodoList = (handleCloseModal) => {
  const [todoLists, dispatch] = useReducer(todoListReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
  }, [todoLists]);

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

  return {
    todoLists,
    handleAddList,
    handleEditList,
    handleDeleteList,
  };
};
