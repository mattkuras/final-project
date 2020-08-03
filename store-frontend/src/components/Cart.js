import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchItems} from '../actions/fetchItems'
import {addItem} from '../actions/addItem'

class Cart extends React.Component {

    componentDidMount(){
        this.props.fetchItems()
    }

    render(){
        return(
            <div>
                <h2>cart</h2> 
                {this.props.cart.map(item =>
                <li key={item.id}>{item.name} - ${item.price}</li>)}
                <br></br><br></br>
                <p>{this.props.cartItems} items = ${this.props.cartPrice}</p> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        guitars: state.guitars,
        cart: state.cart,
        cartPrice: state.cartTotalPrice,
        cartItems: state.cartTotalItems
    }
}

export default connect(mapStateToProps, {fetchItems})(Cart)