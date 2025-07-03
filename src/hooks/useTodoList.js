import { useReducer } from 'react';
import todoListsData from '../data/data';
import { todoListReducer } from '../utils/todoListReducer';

export const useTodoList = (handleCloseModal) => {
  const [todoLists, dispatch] = useReducer(todoListReducer, todoListsData);

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
