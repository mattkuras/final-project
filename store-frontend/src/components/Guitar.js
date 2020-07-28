import React from 'react'

const Guitar = (props) => {

    return(
        <li>
            {props.guitar.name} - ${props.guitar.price}
        </li>
    )

}

export default Guitar