import React, { PropTypes } from 'react';
import AddExpensePage from '../src/components/AddPage';
import List from '../src/components/List';;




class App extends React.Component {
 

  render() {
    
    return (
      <div className={'container'}>
  <div className={'row justify-content-md-center'}>
       <AddExpensePage/>
       </div>
       <div className={'row justify-content-md-center'}>
       <List/>
       </div>
      </div>
    );
  }
}
;


export default App;