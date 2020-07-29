import React from 'react'
import {Redirect} from 'react-router-dom'


const Guitar = (props) => {

    let guitar = props.guitars[props.match.params.id - 1]
    console.log(guitar)
    return(
        <li>
            {guitar ? guitar.name : <Redirect to='/guitars'/>} - {guitar ? guitar.price : <Redirect to='/guitars'/>} <br></br> <br></br>
            {guitar ? guitar.description : <Redirect to='/guitars'/>}
        </li>
    )

}

export default Guitar