import { createStore } from 'redux';
import todo from '../reducers/todo';


export default () => {
  const store = createStore(todo,[] );


  return store;
};


