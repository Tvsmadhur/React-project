import React from 'react'

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
                    <a href="#" className="related-link">{props.title}</a>
                    <p className="related-author">{props.author}</p>
                </div>
            </li>
        </>
    )
}

export default Sidebarreusable