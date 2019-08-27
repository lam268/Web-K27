import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './components/Todoitem';

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
        const newtodos = {
            content: this.state.inputValue,
            finished: false,
        }
        this.setState({
            inputValue: '',
            todos: [...this.state.todos, newtodos],
        })
    };

    handleInputchange = (event) => {
        const newValue = event.target.value;
        this.setState({
            inputValue: newValue,
        });
    }

    updateTodoItem = (itemIndex) => {
        this.setState({
            todos: this.state.todos.map((value, index) => {
                if (index === itemIndex) {
                    return {
                        ...value,
                        finished: true,
                    };
                } else {
                    return value;
                }
            })
        })
    }

    deleteTodoItem = (itemIndex) => {
        this.setState({
            todos: this.state.todos.filter((value, index) => {
                if (index === itemIndex) {
                    return false;
                }
                else {
                    return true;
                }
            }
            )
        }
        )
    }

    render() {
        return (
            <div className='container'>
                <div className='result'>
                    {this.state.todos.map((value, index) => {
                        return (
                            <TodoItem
                                deleteTodoItem={this.deleteTodoItem}
                                updateTodoItem={this.updateTodoItem}
                                itemIndex={index}
                                finished={value.finished}
                                value={value.content} />
                        );
                    })}
                </div>
                <div className='Todolist'>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group row">
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