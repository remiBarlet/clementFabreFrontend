import React from 'react'
import PropTypes  from 'prop-types'

const NavbarBlock = (props) => {
    return(
        <li className={ props.className }>
            { props.children != null ? 
            <ul>
                { props.children }
            </ul>
            : null }
        </li>
    )
}

NavbarBlock.propTypes = {
    className: PropTypes.string.isRequired
}

export default NavbarBlock