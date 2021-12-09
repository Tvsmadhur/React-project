import React from 'react'
import App from '../App'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './Blog';
function Navreusable(props)
{
    return (
        <>
            <Router>
                <Link to={props.href}>{props.title}</Link>
                {/* <Routes>
                    <Route exact path='/blog' element={<Blog />}></Route>
                    {/* <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route> */}
            </Router>

        </>
    )
}
export default Navreusable