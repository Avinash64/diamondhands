import React from 'react'
import "./navbar.css"
function Navbar() {

    ;

  return (
    <nav className='nav'>
        <a href='/' className='site'>
            Diamond Hands
        </a>
        <ul>
            <li>
                <a href='/login'>Log in</a>
            </li>
            <li>
                <a href='/register'>Register</a>
            </li>
            <li>
                <a href='/' onClick={document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}>Log out</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar