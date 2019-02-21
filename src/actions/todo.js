var a = 1;
export const  AddTodo = (
    {
      id = a++,
      name = ''
    } = {}
  ) =>({
    type: 'ADD_EXPENSE',
    ToDo: {
      id,
      name
    }
  });

  export const removeItem = ({ id } = {}) => ({
    type: 'REMOVE_Item',
    id
  });