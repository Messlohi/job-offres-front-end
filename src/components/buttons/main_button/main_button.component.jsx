import React from 'react'

import './main_button.styles.scss'


const MainButton = ({text,...otherProps}) => {
    return(
        <button className="btn" {...otherProps} >{text}</button>
    )
}

export default MainButton; 