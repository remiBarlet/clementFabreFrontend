import React from 'react'

const mainContainer = (props) => {
    return(
        <div id='main'>
            <div id='slider-container'>
                <img className={`contain ${props.imgOrientation}`} src={props.url} />
            </div>
        </div>
    )
}