import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchGuitars} from './actions/fetchGuitars'
import GuitarsContainer from './containers/GuitarsContainer'


class App extends React.Component {

  // componentDidMount(){
  //   this.props.fetchGuitars({type: "FETCH_GUITARS", payload: {name:'guitars'}})
  // }

  render() {
    return (
      <div className="App">
        <GuitarsContainer/>
      </div>
    )
  }
} 

export default connect(null, {fetchGuitars})(App);
