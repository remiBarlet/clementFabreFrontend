import React from 'react'
import './Burger.css'

const Burger = (props) => {

    return(
        <div className={`burger burger-slip ${ props.isOpen ? 'open' : 'closed' }`} >
            <div className='burger-lines'></div>
        </div>
    )
}

export default Burger