import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div id='page'>
      <aside>   
          <nav>
            <ul id='nav-bar-list'>
              <li><i class="bi bi-house"></i></li>
              <li><i class="bi bi-person"></i></li>
              <li><i class="bi bi-code-slash"></i></li>
              <li><i class="bi bi-briefcase"></i></li>
              <li><i class="bi bi-telephone"></i></li>
              {/* <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li> */}
            </ul>
          </nav>    
      </aside>
        <div className='outer-wrapper'>
          <header>
            <div id='img-container'>
              <img src="https://i.ibb.co/hWpV4Th/me.jpg" alt="Image of Kimey Robertson" />
            </div>
          </header>
        </div>
    </div>
  )
}
