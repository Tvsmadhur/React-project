import React from 'react'
import Navreusable from './Navreusable'
import './Styles.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Header()
{
    return (
        <>
            <header className="main-header clearfix">
                <h1>📘 The Code Magazine</h1>

                <nav>
                    <Link to='/'  >Blog</Link>

                    <Link to='challenges'>Challenges</Link>

                    <Link to='flexbox'  >Flexbox</Link>

                    <Link to='grid'  >CSS Grid</Link>
                </nav>


            </header>
        </>
    )
}

export default Header