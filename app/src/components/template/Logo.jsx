import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default props =>
    <div className="row gtr-uniform aln-center">
        <div className="col-4">
            <Link to="/" className="logo">
                <span className="image fit"><img src={logo} alt="Logo..." /></span>
            </Link>
        </div>
    </div>
    