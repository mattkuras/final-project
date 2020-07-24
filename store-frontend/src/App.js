import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


class App extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3001/guitars")
    .then(resp => resp.json())
    .then(data => console.log(data[0]))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
} 

export default App;
