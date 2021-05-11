import React, { useState } from 'react'
import PropTypes from 'prop-types';
import smallDeviceSize from '../utils/smallDeviceSize';
import { SMALL_DEVICE } from '../utils/config';


const NavbarLine = (props) => {

    //hook to set the childrens visibles
    const [ isOpen, setIsOpen ] = useState(false)
    //hook to set the childrens allways visibles
    const [ allwaysOpen, setAllwaysOpen ] = useState(false)
    
    if (props.allwaysOpen) {
        setAllwaysOpen(true)
    }

    return(
        <li 
            className={ props.className } 
            onMouseLeave={ !smallDeviceSize(SMALL_DEVICE) ? (() => { isOpen && setIsOpen(!isOpen) }) : null }
        >
            <a href={ props.href } onClick={ () => setIsOpen(!isOpen) } >
                    { props.label }
            </a>
            {/*return the childrens if they exist 
            in case of a small device only if isOpen is true*/}
            {/* props.allwaysOpen && setIsOpen(true) */}
            { props.children != null && (isOpen || allwaysOpen) ? <ul>{ props.children }</ul> : null }
        </li>
    )
}

NavbarLine.propTypes = {
    className: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

export default NavbarLine