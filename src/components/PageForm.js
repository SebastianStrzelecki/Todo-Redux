import React from 'react';
import { removeItem } from '../actions/todo';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:""
         }
    }
    onDescriptionChange=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name !==''){
        this.props.onSubmit({
            name:this.state.name
        })
        this.setState({
            name: ''
        })}
    };
    render() { 
        return ( 
        <div>
            <form onSubmit={this.onSubmit}  className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Dodaj zadanie"
                value={this.state.name}
                onChange={this.onDescriptionChange}
                />
                <div className="input-group-append">
                 <button 
                 className="btn btn-outline-secondary" 
                 disabled = {this.state.name === '' ? true:false}>Dodaj do listy</button>
                </div>
            </form>

            {/* <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Todo"
                    value={this.state.name}
                    onChange={this.onDescriptionChange}
                />
                <button disabled = {this.state.name ==='' ? true:false}>Add Expense</button>
            </form> */}
        </div> );
    }
}
 
