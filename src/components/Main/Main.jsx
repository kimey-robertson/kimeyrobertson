import React, { useState, useEffect } from 'react'
import './Main.css'

export default function Main() {
const [navButtonsShown, setNavButtonsShown] = useState(false)
const [sideBarHidden, setSideBarHidden] = useState(false)
const [menuButtonHidden, setMenuButtonHidden] = useState(true)

// Listen for when the breakpoint 990px is reached and either show or hide the sidebar
useEffect(() => {
  const mediaQuery = window.matchMedia('(max-width: 990px)'); 
  function handleBreakpointChange(event) {
    if (event.matches) {
      // Under 990px
      setSideBarHidden(true)
      setMenuButtonHidden(false)
    } else {
      // Over 990px
      setSideBarHidden(false)
      setMenuButtonHidden(true)
      setNavButtonsShown(false)
      
    }
  }
  mediaQuery.addEventListener('change', handleBreakpointChange);

  return () => {
    mediaQuery.removeEventListener('change', handleBreakpointChange);
  };
}, [])

function handleMenuBtnClick() {
  if (sideBarHidden) {
    setSideBarHidden(false)
    setNavButtonsShown(true)
  } else {
    setSideBarHidden(true)
    setNavButtonsShown(false)
  }
}

  return (
    <div id='page'>
      {!menuButtonHidden && <button onClick={handleMenuBtnClick} className='menu-btn'><i className="bi bi-list"></i></button>}
      {!sideBarHidden && (
      <aside id='aside'>   
          <nav
          onMouseEnter={() => setNavButtonsShown(true)}
          onMouseLeave={() => setNavButtonsShown(false)}>
            <ul id='nav-bar-list'>
            {!navButtonsShown && (
              <div className='nav-icons'>
                <li><a href=""><i className="bi bi-house"></i></a></li>
                <li><a href=""><i className="bi bi-person"></i></a></li>
                <li><a href=""><i className="bi bi-code-slash"></i></a></li>
                <li><a href=""><i className="bi bi-briefcase"></i></a></li>
                <li><a href=""><i className="bi bi-telephone"></i></a></li>
              </div>
            )}
              {navButtonsShown && (      
              <div className='nav-buttons'>
                <li><a href=""><i className="bi bi-house"></i><p>HOME</p></a></li>
                <li><a href=""><i className="bi bi-person"></i><p>ABOUT</p></a></li>
                <li><a href=""><i className="bi bi-code-slash"></i><p>SKILLS</p></a></li>
                <li><a href=""><i className="bi bi-briefcase"></i><p>PROJECTS</p></a></li>
                <li><a href=""><i className="bi bi-telephone"></i><p>CONTACT</p></a></li>
              </div>
              )}
            </ul>
          </nav>    
      </aside>
      )}
        <div className='outer-wrapper'>
          <div className='inner-wrapper'>
            <header>
              <div id='img-container'>
                <img src="https://i.ibb.co/hWpV4Th/me.jpg" alt="Image of Kimey Robertson" />
              </div>
              <div id='description-container'>
                <p className='description'>HI THERE! I'M</p>
                <h1 className='name'><span className='blue-text'>KIMEY </span>ROBERTSON</h1>
                <p className='description'><span className='blue-text'>A Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.</p>
                  <div id='socials-resume'>
                    <a href="" id='resume-button' className='btn'>Resumé</a>
                    <a href="" className='social-container'><i className="bi bi-linkedin"></i></a>
                    <a href="" className='social-container'><i className="bi bi-github"></i></a>
                  </div>
              </div>
            </header>
            <main>
              <section className='about-section'>
                <div className='about-head'>
                  <span>______ SOME INFO</span>
                  <h2>ABOUT ME</h2>
                </div>
                <div className='about-me-container'>
                  <article className='about-me'>
                  Hi, I'm Kimey Robertson, an Australian man with a passion for learning and growth. 
                  After working in a variety of roles, including as a chef and health coach, I found 
                  a new calling in the tech industry and started learning to code in January 2022. 
                  With my diverse background, I have developed the ability to deal with stress and work well in a team. 
                  I am extremely motivated and passionate about my new career and am determined to use my newfound skills 
                  to make a positive impact. Recently, I completed <span className='blue-text'>Harvard's CS50 Intro to Computer Science Course</span>, 
                  and <span className='blue-text'>Codecademy.com's Full Stack Engineer Course.</span> I am driven by my passion for learning and am eager 
                  to take on new challenges.
                  </article>
                </div>
              </section>
              <section className='skills-section'>
                <div className='skills-head'>
                  <span>______ CHECK OUT MY</span>
                  <h2>SKILLS</h2>
                </div>
                <div className='skills-container'>
                  <div className='skill-container'>

                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
    </div>
  )
}
