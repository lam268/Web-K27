import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import NotFoundScreen from './pages/NotFoundScreen';
import RegisterScreen from './pages/RegisterScreen';
import UserScreen from './pages/UserScreen';

class App extends React.Component {
  state = {
    currentUser: '',
  }
componentWillMount(){
  const currentUser = window.localStorage.getItem('email');
  this.setState({
    currentUser: currentUser,
  })
}

handleLogoutClick = () => {
  // call logout api => clear session storage
  fetch('http://localhost:3001/users/logout', {
    method: 'GET',
    credentials: 'include',
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // clear window.localStorage
      window.localStorage.removeItem('email');
      window.localStorage.removeItem('fullName');

      // clear fullname + email in state
      this.setState({
        currentUser: {
          email: '',
          fullName: '',
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

  render() {
    console.log(this.state.currentUser);
    return (
      <div className="container" >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Techkids Hotgirls</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {this.state.currentUser.email ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link">Welcome {this.state.currentUser.email},</a>
                </li>
                <a className="nav-link" onClick={this.handleLogoutClick}>Log out</a>
              </ul>
            ): (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Register</a>
                </li>
              </ul>
            )}
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              <a className='btn btn-outline-primary ml-3' href='/create-post'>+ New Post</a>
            </form>
          </div>
        </nav>

        <BrowserRouter>
          <Switch>
            <Route path='/login' component={LoginScreen} exact={true}></Route>
            <Route path='/register' component={RegisterScreen} exact={true}></Route>
            <Route path='/current-user' component={UserScreen}></Route>
            <Route path='/' component={UserScreen}></Route>
            <Route path='*' component={NotFoundScreen}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }


}
export default App;
