import React, { Component } from 'react'
import Guitars from '../components/Guitars'
import {connect} from 'react-redux';
import {fetchGuitars} from '../actions/fetchGuitars'


class GuitarsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchGuitars()
    }
    render (){
        return(
            <div>
                <Guitars guitars={this.props.guitars}/>
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