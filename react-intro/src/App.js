import React from 'react';
import logo from './logo.svg';
import './App.css';

// const App = (props) => {
//     return ( 
//     <div>Hello world</div>   
//     );
// };

class App extends React.Component {
    render() {
        return ( 
            <div className='container'>
                <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" class="sr-only">Password</label>
        <input type="text" className="form-control" placeholder="todoitem"></input>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Add a to item</button>
        </form>
            </div>
        
        );
    }
}

export default App;