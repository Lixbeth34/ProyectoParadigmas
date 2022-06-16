/* eslint-disable jsx-a11y/alt-text */


import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ( ) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col md-4">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <Link to='/' >
                            <img src='./left.png' width='100'/>
                        </Link>
                             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                 <span className="navbar-toggler-icon"></span>
                             </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/' >comida</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/comidasC' >linkcom</Link>
                        </li>
                        </ul>
                    <span className="navbar-text">
                        Comida japonesa de diferentes tipos 
                    </span>
                    </div>
                </div>
                </nav>
                </div>
            </div>
        </div>

    );
}
export default Navbar;