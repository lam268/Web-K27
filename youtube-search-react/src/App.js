import React from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = {
    searchValue: '',
    searchResult: [],
    nextpageToken: '',
  }

  handleonSubmit = () => {
    event.preventDefault();
    fetch(`“https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchValue}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw”
    `, {})
      .then((res)=> res.json())
      .then((data)=> {
        console.log(data);
        this.setState({
          searchResult: [...this.state.searchResult, ...data.items],
          nextpageToken: data.nextpageToken,
        })
      })
      .catch((err) => {
        console.log(err);
        window.alert(err.message);
      })
  }

  handlechange = () => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="https://www1-lw.xda-cdn.com/files/2017/08/After-12-Years-Google-Gives-YouTube-a-New-Logo.png" alt="" />
            <h1>Let's search!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <form id="search" onSubmit={this.handleonSubmit}>
              <div className="form-group">
                <input type="text" name="keyword" id="keyword" className="form-control" required
                  value={this.state.searchValue}
                  onChange={this.handlechange} />
                <br></br>
                <input type="submit" className="btn btn-primary form-control" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" id="result-list">
          </div>
        </div>
      </div>
    );
  };
}

export default App;
