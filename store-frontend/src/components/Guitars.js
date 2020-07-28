import React from 'react'



const Guitars = (props) => {
    return (
        <div>
            {props.guitars.map(guitar => <li key={guitar.id}>
                {guitar.name} - {guitar.price}
                <br></br>
                {guitar.description}
            </li>)}
        </div> 
    )
}
export default Guitars