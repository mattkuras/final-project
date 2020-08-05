import React from 'react'
import Guitar from '../guitar/Guitar'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {addItem} from '../../actions/addItem'
import './guitars.css'

const Guitars = (props) => {

    return ( 
        <div className='container'>

            {props.guitars.map(guitar => 
            // <li >
                <div className='guitarCard' key={guitar.id}>
                    <img className='guitarImage' src={guitar.image}/>
                    <Link to={`/guitars/${guitar.id}`}>{guitar.name}</Link> 
                
                <button className='addButton' onClick={(event) => props.addItem(guitar)} >add to cart</button>
                </div>
            // </li>
            )}

            
        </div> 
    )
}
const mapStateToProps = state => {
    return {
        guitars: state.guitars,
 
    }
}
export default connect(mapStateToProps, {addItem})(Guitars)