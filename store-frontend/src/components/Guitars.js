import React from 'react'
import Guitar from './Guitar'
import {Route, Link} from 'react-router-dom'


handleClick = (event) => {
    event.preventDefault()
    this.props.addItem
}

const Guitars = (props) => {
    return (
        <div>
            {props.guitars.map(guitar => 
            <li key={guitar.id}>
                <Link to={`/guitars/${guitar.id}`}>{guitar.name}</Link> <br></br><br></br>
                <button onClick={handleClick()} >add to cart</button>
            </li>)}
        </div> 
    )
}
export default Guitars