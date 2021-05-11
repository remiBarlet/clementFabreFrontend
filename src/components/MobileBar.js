import React from 'react'
import Burger from './Burger'

const MobileBar = (props) => {

    return(
        <section id="mobileMenuBar"><a href="index.html" id="mobileMenuBarTitle">clement fabre architecte</a>
            <div id="mobileMenuBarBtn" onClick={() => { props.onClick() }} >
                <Burger isOpen={ props.isOpen } />
            </div>
        </section>
    )
}

export default MobileBar