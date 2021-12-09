import React from 'react'

function Navreusable(props)
{
    return (
        <>
            <a href={props.href}>{props.title}</a>
        </>
    )
}
export default Navreusable