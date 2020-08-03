import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

const Header = (props) => {

        return(
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/cart'>Cart</Link>
                        </li>
                        <li>
                            <Link to='/guitars'>Guitars</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
}

export default Header 