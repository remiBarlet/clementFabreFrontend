import React, { useEffect, useState } from 'react'
import MobileBar from './MobileBar'
import Navbar from './Navbar'
import './Header.css'
import SmallDeviceSize from '../utils/smallDeviceSize'
import { SMALL_DEVICE } from '../utils/config'

const Header = ( props ) => {

    //default state: 
    //the navigation menu is visible at the first level
    //the mobileBar is visible if the device is small, unvisible otherwise 
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isSmall, setIsSmall ] = useState(SmallDeviceSize(SMALL_DEVICE))

    useEffect(
        () => {
        const resizeListener = () => {
          // change width from the state object
          setIsSmall(SmallDeviceSize(SMALL_DEVICE))
        }
        // set resize listener
        window.addEventListener('resize', resizeListener)
    
        // clean up function
        return () => {
          // remove resize listener
          window.removeEventListener('resize', resizeListener)
        }
      })

    //function which would be passed among the childrens to set isOpen 
    //on mouseLeave, blur or click events 
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    //the mobile bar is visible only if the device is small
    //the mobile bar receive props with the onClick function and the isOpen attribute
    //theses props would be passed to the own childrens of MobileBar
    //the click would be done on the children level and go up on the tree, 
    //the state.isOpen would go down
    //the Navbar is visible if opened on small device and allways otherwise
    return(
        <header onMouseLeave={ isOpen ? toggleMenu : null } >
            { isSmall ? <MobileBar onClick={ toggleMenu } isOpen={ isOpen } /> : null }
            { (isSmall && isOpen) || !isSmall ? <Navbar projects={ props.projects } rsxSoc={ props.rsxSoc }/> : null }
        </header>
    )

}

export default Header