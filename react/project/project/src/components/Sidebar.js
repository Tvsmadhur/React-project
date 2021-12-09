import React from 'react'
import './Styles.css'
import Sidebarreusable from './Sidebarreusable'
function Sidebar()
{
    return (
        <>

            <aside>
                <h4>Related posts</h4>

                <ul className="related">
                    <Sidebarreusable src='./img/related-1.jpg' title='How to Learn Web Development' author='By Jonas Schmedtmann' />
                    <Sidebarreusable src='./img/related-2.jpg' title='The Unknown Powers of CSS' author='By Jim Dillon' />
                    <Sidebarreusable src='./img/related-3.jpg' title='Why JavaScript is Awesome' author='By Matilda' />
                    {/* <li className="related-post">
                        <img
                            src="./img/related-1.jpg"
                            alt="Person programming"
                            width="75"
                            height="75"
                        />
                        <div>
                            <a href="#" className="related-link">How to Learn Web Development</a>
                            <p className="related-author">By Jonas Schmedtmann</p>
                        </div>
                    </li> */}

                    {/* <li className="related-post">
                        <img
                            src="./img/related-2.jpg"
                            alt="Lightning"
                            width="75"
                            height="75"
                        />
                        <div>
                            <a href="#" className="related-link">The Unknown Powers of CSS</a>
                            <p className="related-author">By Jim Dillon</p>
                        </div>
                    </li> */}

                    {/* <li className="related-post">
                        <img
                            src="./img/related-3.jpg"
                            alt="JavaScript code on a screen"
                            width="75"
                            height="75"
                        />
                        <div>
                            <a href="#" className="related-link">Why JavaScript is Awesome</a>
                            <p className="related-author">By Matilda</p>
                        </div>
                    </li> */}
                </ul>
            </aside>
        </>
    )
}
export default Sidebar