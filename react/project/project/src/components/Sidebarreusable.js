import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Sidebarreusable(props)
{
    return (
        <>
            <li className="related-post">
                <img
                    src={props.src}
                    alt="Person programming"
                    width="75"
                    height="75"
                />
                <div>
                    <Link to={`/${props.href}`} className="related-link">{props.title}</Link>
                    <p className="related-author">{props.author}</p>
                </div>
            </li>
        </>
    )
}

export default Sidebarreusable