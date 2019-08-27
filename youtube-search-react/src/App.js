import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
          <form id="search">
            <div className="form-group">
              <input type="text" name="keyword" id="keyword" className="form-control" required />
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
}

export default App;
