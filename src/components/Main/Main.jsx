import React, { useState, useEffect } from 'react'
import './Main.css'

export default function Main() {
const [navButtonsShown, setNavButtonsShown] = useState(false)
const [sideBarHidden, setSideBarHidden] = useState(false)
const [menuButtonHidden, setMenuButtonHidden] = useState(true)

// Listen for when the breakpoint 990px is reached and either show or hide the sidebar
useEffect(() => {
  function handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 990) {
      // Under 990px
      setSideBarHidden(true);
      setMenuButtonHidden(false);
    } else {
      // Over 990px
      setSideBarHidden(false);
      setMenuButtonHidden(true);
      setNavButtonsShown(false);
    }
  }

  handleResize(); // call the function initially to set the initial state

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


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
      {/* {!sideBarHidden && ( */}
      <aside id='aside' className={`navbar ${!sideBarHidden ? 'navbar--visible' : ''}`}>   
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
            <div className='scroll-down-container'>
              <div className='arrow'><i class="bi bi-arrow-down"></i></div>
              {navButtonsShown && <p>SCROLL DOWN</p> }
            </div>
              {navButtonsShown && (      
              <div className='nav-buttons'>
                <a href="#home"><li><i className="bi bi-house"></i><p>HOME</p></li></a>
                <a href="#about"><li><i className="bi bi-person"></i><p>ABOUT</p></li></a>
                <a href="#skills"><li><i className="bi bi-code-slash"></i><p>SKILLS</p></li></a>
                <a href="#projects"><li><i className="bi bi-briefcase"></i><p>PROJECTS</p></li></a>
                <a href="#contact"><li><i className="bi bi-telephone"></i><p>CONTACT</p></li></a>
              </div>
              )}
            </ul>
          </nav>    
      </aside>
        <div className='outer-wrapper'>
          <div className='inner-wrapper'>
            <header id='home'>
              <div id='img-container'>
                <img src="https://i.ibb.co/hWpV4Th/me.jpg" alt="Image of Kimey Robertson" />
              </div>
              <div id='description-container'>
                <p className='description'>HI THERE! I'M</p>
                <h1 className='name'><span className='blue-text'>KIMEY </span>ROBERTSON</h1>
                <p className='description'>A <span className='blue-text'>Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.</p>
                  <div id='socials-resume'>
                    <a href="https://i.ibb.co/gDypzNh/Kimey-Robertson-Resume.jpg" target="_blank" id='resume-button' className='btn'>Resumé</a>
                    <a href="https://www.linkedin.com/in/kimey-robertson-2b98831b2/" target="_blank" className='social-container'><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/kimey-robertson" target="_blank" className='social-container'><i className="bi bi-github"></i></a>
                  </div>
              </div>
            </header>
            <main>
              <section className='about-section' id='about'>
                <div className='about-head'>
                  <div className='line'></div>
                  <span>SOME INFO</span>
                  <h2>ABOUT ME</h2>
                </div>
                <div className='about-me-container'>
                  <article className='about-me'>
                  Hi, I'm <span className='blue-text'>Kimey</span>. I have a passion for learning and growth. 
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
              <section className='skills-section' id='skills'>
                <div className='skills-head'>
                  <div className='line'></div>
                  <span>CHECK OUT MY</span>
                  <h2>SKILLS</h2>
                </div>
                <div className='skills-grid'>
                  <div className='skill-container'>
                    <img src="https://i.ibb.co/jV3MZ4J/html.png" alt="HTML icon" />
                    <p>HTML</p>
                  </div>
                  <div className='skill-container'>
                    <img src="https://i.ibb.co/j4bmqMb/css.png" alt="CSS icon" />
                    <p>CSS</p>
                  </div>
                  <div className='skill-container'>
                    <img src="https://i.ibb.co/WfyCVpw/js.png" alt="Javascript icon" />
                    <p>Javascript</p>
                  </div>
                  <div className='skill-container' id='react-container'>
                    <img src="https://i.ibb.co/7vMgcqN/react.png" alt="React icon" />
                    <p>React</p>
                  </div>
                  <div className='skill-container'>
                    <img src="https://i.ibb.co/rmj4fZJ/redux.png" alt="Redux icon" />
                    <p>Redux</p>
                  </div>
                  <div className='skill-container' id='bootstrap-container'>
                    <img src="https://i.ibb.co/m6ZZbvW/bootstrap.jpg" alt="Bootstrap icon" />
                    <p>Bootstrap</p>
                  </div>
                  <div className='skill-container'>
                    <img src="https://i.ibb.co/LPjTVzT/python.jpg" alt="Python icon" />
                    <p>Python</p>
                  </div>
                  <div className='skill-container' id='vscode-container'>
                    <img src="https://i.ibb.co/6BJf36N/vscode.png" alt="VS Code icon" />
                    <p>VS Code</p>
                  </div>
                  <div className='skill-container'>
                    <img src="https://i.ibb.co/wdjmMkZ/git.png" alt="Git icon" />
                    <p>Git</p>
                  </div>
                  <div className='skill-container'>
                    <img src="https://i.ibb.co/2q6Sd8L/node.png" alt="Node icon" />
                    <p>Node</p>
                  </div>
                  <div className='skill-container'>
                    <img src="https://i.ibb.co/6ykKksm/express.png" alt="Express icon" />
                    <p>Express</p>
                  </div>
                  <div className='skill-container' id='postgresql-container'>
                    <img src="https://i.ibb.co/ZX65z2M/postgre-SQL.png" alt="PostgreSQL icon" />
                    <p>PostgreSQL</p>
                  </div>
                  <div className='skill-container' id='terminal-container'>
                    <img src="https://i.ibb.co/TmsHKcW/terminal.png" alt="Terminal icon " />
                    <p>Terminal</p>
                  </div>
                  <div className='skill-container'>
                    <img src="https://i.ibb.co/NWrTHsw/http.png" alt="HTTP icon " />
                    <p>HTTP</p>
                  </div>

                </div>
              </section>
              <section className='projects-section' id='projects'>
                <div className='projects-head'>
                  <div className='line'></div>
                  <span>TAKE A LOOK AT MY</span>
                  <h2>PROJECTS</h2>
                </div>
                <div className='projects-container'>
                  <div className='project-box'>
                    <div className='project-img-container'>
                    <img src="https://i.ibb.co/h2XTnD3/my-Social-Screenshot.png" alt="Screenshot of mySocial project" />
                    </div>
                    <div className='project-description-container'>
                      <h1>mySocial</h1>
                      <h4>Technologies Used:<span className='blue-text'> HTML, CSS, React, Redux, Bootstrap, Node, Express, PostgreSQL, AWS </span> </h4>
                      <ul>
                        <li>Full stack social media clone</li>
                        <li>Uses localstorage and database checks to allow users to create an account and sign in</li>
                        <li>Makes use of HTTP requests and react-redux state managent so users can create posts and edit their profile</li>
                      </ul>
                      <div className='project-link-container'>
                        {/* <a href="" target="_blank"><span className='blue-text'>Live</span></a> */}
                        <a href="https://github.com/kimey-robertson/my-social.git" target="_blank"><span className='blue-text'>Repo</span></a>
                      </div>
                    </div>
                  </div>
                  <div className='project-box'>
                    <div className='project-img-container'>
                    <img src="https://i.ibb.co/JvJ9Gs0/Reddit-Client-Screenshot.png" alt="Screenshot of Reddit Client project" />
                    </div>
                    <div className='project-description-container'>
                      <h1>Reddit Client</h1>
                      <h4>Technologies Used:<span className='blue-text'> HTML, CSS, React, Redux, Reddit API </span> </h4>
                      <ul>
                        <li>Utilises the Reddit API and a search function to find reddit posts</li>
                        <li>Created and rendered with React</li>
                        <li>State managed using Redux</li>
                      </ul>
                      <div className='project-link-container'>
                        <a href="https://kimey-robertson.github.io/reddit-client/" target="_blank"><span className='blue-text'>Live</span></a>
                        <a href="https://github.com/kimey-robertson/reddit-client.git" target="_blank"><span className='blue-text'>Repo</span></a>
                      </div>
                    </div>
                  </div>
                  <div className='project-box'>
                    <div className='project-img-container'>
                    <img src="https://i.ibb.co/8N9sWR5/Chat-App-Screenshot.png" alt="Screenshot of Chat App project" />
                    </div>
                    <div className='project-description-container'>
                      <h1>Chat App</h1>
                      <h4>Technologies Used:<span className='blue-text'> HTML, CSS, React, Firebase </span> </h4>
                      <ul>
                        <li>A real-time chat app that can have multiple people connect and chatting simultaneously</li>
                        <li>Makes use of firebase's hosting platform and real time database</li>
                        <li>Created and rendered with React</li>
                      </ul>
                      <div className='project-link-container'>
                        <a href="https://chat-app-1f194.firebaseapp.com/" target="_blank"><span className='blue-text'>Live</span></a>
                        <a href="https://github.com/kimey-robertson/chat-app.git" target="_blank"><span className='blue-text'>Repo</span></a>
                      </div>
                    </div>
                  </div>
                  <div className='project-box'>
                    <div className='project-img-container'>
                    <img src="https://i.ibb.co/0XDkZVH/Adventure-Game-Screenshot.png" alt="Screenshot of Adventure Game project" />
                    </div>
                    <div className='project-description-container'>
                      <h1>Text-based Adventure Game</h1>
                      <h4>Technologies Used:<span className='blue-text'> HTML, CSS, React </span> </h4>
                      <ul>
                        <li>Text node adventure game created in react</li>
                        <li>Hosted with netlify</li>
                        {/* <li></li> */}

                      </ul>
                      <div className='project-link-container'>
                        <a href="https://jazzy-bunny-473a0e.netlify.app/" target="_blank"><span className='blue-text'>Live</span></a>
                        <a href="https://github.com/kimey-robertson/adventure-game-react.git" target="_blank"><span className='blue-text'>Repo</span></a>
                      </div>
                    </div>
                  </div>
                  <div className='project-box'>
                    <div className='project-img-container'>
                    <img src="https://i.ibb.co/JcFPzQD/Snake-Game-Screenshot.png" alt="Screenshot of Snake Game project" />
                    </div>
                    <div className='project-description-container'>
                      <h1>Snake Game</h1>
                      <h4>Technologies Used:<span className='blue-text'> HTML, CSS, Javascript </span> </h4>
                      <ul>
                        <li>Classic Snake Game with a retro new look</li>
                        <li>Created in Vanilla JS</li>
                        {/* <li></li> */}

                      </ul>
                      <div className='project-link-container'>
                        <a href="https://kimey-robertson.github.io/Snake-Game/" target="_blank"><span className='blue-text'>Live</span></a>
                        <a href="https://github.com/kimey-robertson/Snake-Game.git" target="_blank"><span className='blue-text'>Repo</span></a>
                      </div>
                    </div>
                  </div>
                </div>

              </section>
              <section className='contact-section' id='contact'>
                <div className='contact-head'>
                  <div className='line'></div>
                  <span>SAY HELLO</span>
                  <h2>CONTACT</h2>
                </div>
                <div className='contact-container'>
                  <h3>Get in Touch</h3>
                  <div className='email-me-container'>
                    <div className='email-icon-container'>
                      <i class="bi bi-envelope"></i>
                    </div>
                    <a href="mailto:kimey.robertson@gmail.com" target="_blank"><p id='my-email'>kimey.robertson@gmail.com</p></a>
                    <p>Email me</p>
                  </div>
                  <h3>Contact Form</h3>
                  <form className='contact-form-grid' id='contact-form' action="https://formspree.io/f/mbjekdrq" method="post">
                    <input type="text" className='form-input' id='name-input' name='name-input' required placeholder='Your Name*' />
                    <input type="text" className='form-input' id='email-input' name='email-input' required placeholder='Your Email*' />
                    <input type="text" className='form-input' id='subject-input' name='subject-input' required placeholder='Subject*' />
                    <textarea type="text" className='form-input' id='message-input' name='message-input' required placeholder='Your Message*' />
                  </form>
                  <button form='contact-form' id='form-button'>Send</button>
                </div>
              </section>
            </main>
          </div>
        </div>
    </div>
  )
}
