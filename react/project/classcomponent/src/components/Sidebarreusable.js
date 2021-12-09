import React from 'react'

class Sidebarreusable extends React.Component
{
    render()
    {
        return (
            <>
                <li className="related-post">
                    <img
                        src={this.props.src}
                        alt="Person programming"
                        width="75"
                        height="75"
                    />
                    <div>
                        <a href="#" className="related-link">{this.props.title}</a>
                        <p className="related-author">{this.props.author}</p>
                    </div>
                </li>
            </>
        )
    }
}
export default Sidebarreusable