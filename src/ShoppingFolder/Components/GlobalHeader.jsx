import React from 'react'

function GlobalHeader() {
  return (
    <div className='headerSection'>

    <div className='logo'>
      <div className='title'>Shoping    </div>
    <div className='logo-image'>   </div>
    </div> 

    <div className='menu-item'>
    
        <ul class="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
   
    </div> 

    <div className='contact-details'>
    <div className="search"> <input type="text" placeholder='Search...' /></div>
      <div className="signin"> <a href="#">Sign in/ Sign Up</a> </div>
       <div className="cart"><a href="#">Cart</a></div> 
    </div>  


  </div>
  )
}

export default GlobalHeader

