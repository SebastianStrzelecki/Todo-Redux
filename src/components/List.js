import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';

const List = (props) => (
    <div className={'list'}>
      <h1>Lista zadań</h1>
      <div>
      {props.propsTodo.map((item) => {
      return <Item key={item.id} name={item.name} id={item.id} />;
    })}
      </div>
    
    </div>
  );

const mapStateToProps = (state) => {
    if(state.length != 0){
    return {propsTodo: state};
}
return {propsTodo: []}
  };
  
  export default connect(mapStateToProps)(List);