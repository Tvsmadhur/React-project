import React from 'react'
import Navreusable from './Navreusable'
class Header extends React.Component
{

    render()
    {
        return (
            <>
                <header className="main-header clearfix">
                    <h1>📘 The Code Magazine</h1>

                    <nav>
                        <Navreusable href='blog.html' title="Blog" />
                        {/* <a href="blog.html">Blog</a> */}
                        <Navreusable href='#' title='Challenges' />
                        {/* <a href="#">Challenges</a> */}
                        <Navreusable href='flexbox.html' title='Flexbox' />
                        {/* <a href="flexbox.html">Flexbox</a> */}
                        <Navreusable href='css-grid.html' title='CSS Grid' />
                        {/* <a href="css-grid.html">CSS Grid</a> */}
                    </nav>


                </header>
            </>
        )
    }
}

export default Header