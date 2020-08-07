import React from 'react'
import {Route, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchItems} from '../../actions/fetchItems'
import {addItem} from '../../actions/addItem'
import {removeItem} from '../../actions/removeItem'
import './cart.css'

class Cart extends React.Component {

    constructor(props){
        super()
        this.state = {
            itemsAmount: 0,
            itemsPrice: 0
             }
    }

    
 
    componentDidMount(){
        
        this.props.fetchItems()
    }


    // useEffect(() => {

    // },[])


    render(){

        return(

            <div>
                <h1 className="cartLabel">Cart</h1> 
                {this.props.cart.map(item =>
                <div className='cart-item' key={item.id}> {item.guitar ? <img className='cart-image' src={item.guitar.image}/> : <Redirect to='/guitars'/>} {item.guitar ? item.guitar.name : <Redirect to='/guitars'/>} - ${item.guitar ? item.guitar.price : <Redirect to='/cart'/>}
                <button className='cart-button' onClick={(event) => this.props.removeItem(item.id)}>remove from cart</button>
                </div>)}

                <br></br><br></br>
                {/* <p>{this.props.cartItems} items = ${this.props.cartPrice}</p>  */}
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

export default connect(mapStateToProps, {fetchItems, removeItem})(Cart)