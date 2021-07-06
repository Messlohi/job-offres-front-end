import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.styles.scss'

const MenuItem = (({category,history,match}) =>{
    return (
   <div onClick={()=> window.location="http://localhost:3000/offres?id="+category.idCateg} className={`menu-item`}>
       <div className="background-image" 
            style={{backgroundImage:`url(${category.img})`,minWidth:`250px`  }}>
        </div>
        <div className='content-catego '>
            <h1 className='title'>{category.nomCateg.toUpperCase()}</h1>
        </div>
    </div>

    )
})

export default withRouter(MenuItem);