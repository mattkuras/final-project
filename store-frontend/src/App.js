import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchGuitars} from './actions/fetchGuitars'


class App extends React.Component {

  // componentDidMount(){
  //   this.props.fetchGuitars({type: "FETCH_GUITARS", payload: {name:'guitars'}})
  // }

  render() {
    return (
      <div className="App">
        <guitarsContainer/>
      </div>
    )
  }
} 

export default connect(null, {fetchGuitars})(App);
