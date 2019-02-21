import React from 'react';
import {removeItem} from '../actions/todo';
import { connect } from 'react-redux';

const Item = (props) => (
  <div>
      <span>{props.name}</span> 
      <button onClick={() => {
        props.dispatch(removeItem({ id: props.id}));
      }}>Usuń</button>
  </div>
);



export default connect(null)(Item);
