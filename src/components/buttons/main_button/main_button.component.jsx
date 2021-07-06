import React from 'react'

import './main_button.styles.scss'
 
const MainButton = ({text,isGoogleSignIn,...otherProps}) => {
    return(
        <button className= {`${isGoogleSignIn? 'google-sign-in':'' } btn btn-orange`} {...otherProps} >{text} {isGoogleSignIn? <i className="fab fa-google text-white"></i> : null} </button>
    )
}

export default MainButton; 