

export default(state = [],action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        return [...state,action.ToDo] ;
        case 'REMOVE_Item':
        return state.filter(({ id }) => id !== action.id);
      default:
        return state;
      }
  };