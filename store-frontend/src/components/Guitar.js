import React from 'react'

const Guitar = (props) => {

    let guitar = props.guitars[props.match.params.id - 1]
    console.log(guitar)
    return(
        <li>
            {guitar ? guitar.name : null} - {guitar ? guitar.price : null} <br></br> <br></br>
            {guitar ? guitar.description : null}
        </li>
    )

}

export default Guitar