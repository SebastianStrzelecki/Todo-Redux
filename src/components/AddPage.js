import React from 'react';
import { connect } from 'react-redux';
import PageForm from './PageForm';
import { AddTodo } from '../actions/todo';
import ExpenseList from '../components/List';

const AddExpensePage = (props) => (
  <div className={'add-page'}>
    <h1>ToDO</h1>
    <PageForm
      onSubmit={(ToDo) => {
      props.dispatch(AddTodo({name:ToDo.name}));
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
