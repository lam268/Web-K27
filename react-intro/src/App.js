import React from 'react';
import logo from './logo.svg';
import './App.css';

// const App = (props) => {
//     return ( 
//     <div>Hello world</div>   
//     );
// };

class App extends React.Component {
    state = {
        inputValue: '',
        todos: [],  // {content: '', finished: true/false}
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submit');
        const newtodos = {
            content: this.state.inputValue,
            finished: false,
        }
        this.setState({
            todos: newtodos,
        })
    };

    handleInputchange = (event) => {
        const newValue = event.target.value;
        this.setState({
            inputValue: newValue,
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='result'></div>
                <div className='Todolist'>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <div class="form-group row">
                            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">To do list</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-lg" id="colFormLabelLg" placeholder="To do list" value={this.state.inputValue} onChange={this.handleInputchange}></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Add a to item</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;