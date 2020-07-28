import React from 'react'
import Guitar from './Guitar'


const Guitars = (props) => {
    return (
        <div>
            {props.guitars.map(guitar => <div key={guitar.id}>
                <Guitar guitar={guitar}/> <br></br>
                
            </div>)}
        </div> 
    )
}
export default Guitars