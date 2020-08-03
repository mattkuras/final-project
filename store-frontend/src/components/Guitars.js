import React from 'react'
import Guitar from './Guitar'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {addItem} from '../actions/addItem'


const Guitars = (props) => {

    return ( 
        <div className='container'>

            {props.guitars.map(guitar => 
            <li key={guitar.id}>
                <div className='guitarCard'>
                    <img className='guitarImage' src={guitar.image}/>
                    <Link to={`/guitars/${guitar.id}`}>{guitar.name}</Link> <br></br><br></br>
                </div>

                <Link to={`/guitars/${guitar.id}`}>{guitar.name}</Link> <br></br><br></br>
                <button onClick={(event) => props.addItem(guitar)} >add to cart</button>
            </li>)}

            
        </div> 
    )
}
const mapStateToProps = state => {
    return {
        guitars: state.guitars,
 
    }
}
export default connect(mapStateToProps, {addItem})(Guitars)