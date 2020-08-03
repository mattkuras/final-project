import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchGuitars} from './actions/fetchGuitars'
import GuitarsContainer from './containers/GuitarsContainer'
import Cart from './components/Cart';
import Header from "./components/Header";
import { Route } from 'react-router-dom';

class App extends React.Component {



  render() {
    return (
      <div className="App">
        <Header/>
        <GuitarsContainer/>
         <Route exact path='/cart' component={Cart} />
      </div>
    )
  }
} 

export default connect(null, {fetchGuitars})(App);

