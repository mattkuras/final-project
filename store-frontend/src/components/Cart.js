import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';

import {addItem} from '../actions/addItem'

class Cart extends React.Component {

    render(){
        return(
            <div>
                <h2>cart</h2> 
                {this.props.cart.map(item =>
                <li key={item.id}>{item.name}</li>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        guitars: state.guitars,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)