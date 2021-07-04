import React from 'react'


import './form-input.styles.scss'


const FromInput = ({handelChange ,label,...otherProps})=> {
    return(
    <div className="group">
    <input className='form-input-sign' onChange={handelChange}  {...otherProps}/>
    {
        label ?
        (<label className={`${otherProps.value.length>0 ? 'shrink': ''}
            form-input-label`}>
                {label}
        </label>)
        : null
    }
    </div>
    )
}


export default FromInput