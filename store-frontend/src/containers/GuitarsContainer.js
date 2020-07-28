import React, { Component } from 'react'
import Guitars from '../components/Guitars'
import {connect} from 'react-redux';
import {fetchGuitars} from '../actions/fetchGuitars'
import {Route} from 'react-router-dom'
import Guitar from '../components/Guitar'

class GuitarsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchGuitars()
    }
    render (){
        return(
            <div>
                <Route exact path='/guitars' render= {(routerProps) =>  <Guitars {...routerProps} guitars={this.props.guitars}/>} />
                <Route exact path='/guitars/:id' render= {(routerProps) =>  <Guitar {...routerProps} guitars={this.props.guitars}/>} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        guitars: state.guitars
    }
}

export default connect(mapStateToProps, {fetchGuitars})(GuitarsContainer)