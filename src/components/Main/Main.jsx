import React, { useState, useEffect, useRef } from "react";
import "./Main.css";

export default function Main() {
  const [navButtonsShown, setNavButtonsShown] = useState(false);
  const [sideBarHidden, setSideBarHidden] = useState(false);
  const [menuButtonHidden, setMenuButtonHidden] = useState(true);
  const hideButtonsTimerRef = useRef(null);

  // Clear any existing timer and set nav buttons to show
  const handleNavMouseEnter = () => {
    if (hideButtonsTimerRef.current) {
      clearTimeout(hideButtonsTimerRef.current);
    }
    setNavButtonsShown(true);
  };

  // Set a timer to hide nav buttons after a delay
  const handleNavMouseLeave = () => {
    hideButtonsTimerRef.current = setTimeout(() => {
      setNavButtonsShown(false);
    }, 300); // 300ms delay
  };

  // Force hide nav buttons immediately (used in resize and menu click handlers)
  const forceHideNavButtons = () => {
    if (hideButtonsTimerRef.current) {
      clearTimeout(hideButtonsTimerRef.current);
    }
    setNavButtonsShown(false);
  };

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
        forceHideNavButtons();
      }
    }

    handleResize(); // call the function initially to set the initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (hideButtonsTimerRef.current) {
        clearTimeout(hideButtonsTimerRef.current);
      }
    };
  }, []);

  function handleMenuBtnClick() {
    if (sideBarHidden) {
      setSideBarHidden(false);
      setNavButtonsShown(true);
    } else {
      setSideBarHidden(true);
      forceHideNavButtons();
    }
  }

  return (
    <div id="page">
      {!menuButtonHidden && (
        <button onClick={handleMenuBtnClick} className="menu-btn">
          <i className="bi bi-list"></i>
        </button>
      )}
      <aside
        id="aside"
        className={`navbar ${!sideBarHidden ? "navbar--visible" : ""}`}
      >
        <nav
          onMouseEnter={handleNavMouseEnter}
          onMouseLeave={handleNavMouseLeave}
        >
          <ul id="nav-bar-list">
            {!navButtonsShown && (
              <div className="nav-icons">
                <li>
                  <i className="bi bi-house"></i>
                </li>
                <li>
                  <i className="bi bi-person"></i>
                </li>
                <li>
                  <i className="bi bi-code-slash"></i>
                </li>
                <li>
                  <i className="bi bi-briefcase"></i>
                </li>
                <li>
                  <i className="bi bi-laptop"></i>
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                </li>
              </div>
            )}
            <div className="scroll-down-container">
              <div className="arrow">
                <i className="bi bi-arrow-down"></i>
              </div>
              {navButtonsShown && <p>SCROLL DOWN</p>}
            </div>
            {navButtonsShown && (
              <div className="nav-buttons">
                <a href="#home">
                  <li>
                    <i className="bi bi-house"></i>
                    <p>HOME</p>
                  </li>
                </a>
                <a href="#about">
                  <li>
                    <i className="bi bi-person"></i>
                    <p>ABOUT</p>
                  </li>
                </a>
                <a href="#skills">
                  <li>
                    <i className="bi bi-code-slash"></i>
                    <p>SKILLS</p>
                  </li>
                </a>
                <a href="#achievements">
                  <li>
                    <i className="bi bi-briefcase"></i>
                    <p>ACHIEVEMENTS</p>
                  </li>
                </a>
                <a href="#projects">
                  <li>
                    <i className="bi bi-laptop"></i>
                    <p>PROJECTS</p>
                  </li>
                </a>
                <a href="#contact">
                  <li>
                    <i className="bi bi-telephone"></i>
                    <p>CONTACT</p>
                  </li>
                </a>
              </div>
            )}
          </ul>
        </nav>
      </aside>
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <header id="home">
            <div id="img-container">
              <img
                src="https://res.cloudinary.com/duufztjco/image/upload/v1753699887/Profile1_oe2jmw_ndout2.webp"
                alt="Kimey Robertson"
              />
            </div>
            <div id="description-container">
              <p className="description">HI THERE! I'M</p>
              <h1 className="name">
                <span className="blue-text">KIMEY </span>ROBERTSON
              </h1>
              <p className="description">
                A <span className="blue-text">Full Stack Web Developer</span>{" "}
                passionate about creating interactive applications and
                experiences on the web.
              </p>
              <div id="socials-resume">
                <a
                  href="/assets/Kimey_Robertson_Resume.pdf"
                  target="_blank"
                  id="resume-button"
                  className="btn"
                >
                  Resumé
                </a>
                <a
                  href="https://www.linkedin.com/in/kimey-robertson-2b98831b2/"
                  target="_blank"
                  className="social-container"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://github.com/kimey-robertson"
                  target="_blank"
                  className="social-container"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </header>
          <main>
            <section className="about-section" id="about">
              <div className="head">
                <div className="line"></div>
                <span>SOME INFO</span>
                <h2>ABOUT ME</h2>
              </div>
              <div
                className="about-me-container"
                style={{ textAlign: "justify" }}
              >
                <article className="about-me">
                  Hi, I'm <span className="blue-text">Kimey</span>. I'm a
                  passionate full stack web developer with{" "}
                  <span className="blue-text">
                    2 years industry experience{" "}
                  </span>
                  building interactive{" "}
                  <span className="blue-text">
                    {" "}
                    full stack web applications.{" "}
                  </span>{" "}
                  My main expertise includes TypeScript, React, Next.js,
                  Node.js, CSS/SCSS, Ruby on Rails & SQL.
                  <br />
                  <br />
                  I have experience managing small teams of developers,
                  communicating effectively with clients, conducting code
                  reviews & much more!
                  <br />
                  <br />
                  Outside of work, I love to adventure outdoors, play music &
                  have fun creating side projects.{" "}
                  <a href="#contact" style={{ textDecoration: "none" }}>
                    <span className="blue-text">Let's connect!</span>
                  </a>
                </article>
              </div>
            </section>
            <section className="skills-section" id="skills">
              <div className="head">
                <div className="line"></div>
                <span>CHECK OUT MY</span>
                <h2>SKILLS</h2>
              </div>
              <div className="skills-grid">
                <div className="skill-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753701153/js_yebzd9.webp"
                    alt="Javascript icon"
                  />
                  <p>JavaScript</p>
                </div>
                <div className="skill-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753700168/Typescript_logo_reatb0_aofouw.webp"
                    alt="Typescript icon"
                  />
                  <p>TypeScript</p>
                </div>
                <div className="skill-container" id="react-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753701152/react_rb5ier.webp"
                    alt="React icon"
                  />
                  <p>React.js</p>
                </div>
                <div className="skill-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753701152/html_vv0awx.webp"
                    alt="HTML icon"
                  />
                  <p>HTML</p>
                </div>
                <div className="skill-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753701152/css_zfjsdn.webp"
                    alt="CSS icon"
                  />
                  <p>CSS</p>
                </div>
                <div className="skill-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753701155/git_d1306p.webp"
                    alt="Git icon"
                  />
                  <p>Git</p>
                </div>
                <div className="skill-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753701153/node_wxefgu.webp"
                    alt="Node icon"
                  />
                  <p>Node.js</p>
                </div>
                <div className="skill-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1722941013/next-js_a8ef8w.svg"
                    alt="Next icon"
                  />
                  <p>Next.js</p>
                </div>
                <div className="skill-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753701153/express_jlagny.webp"
                    alt="Express icon"
                  />
                  <p>Express.js</p>
                </div>
                <div className="skill-container" id="rails-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753700215/RoR_emn6r3_c74qmg.webp"
                    alt="RoR icon"
                  />
                  <p>Rails</p>
                </div>
                <div className="skill-container" id="postgresql-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753701152/postgres_y7v5md.webp"
                    alt="PostgreSQL icon"
                  />
                  <p>PostgreSQL</p>
                </div>
                <div className="skill-container" id="terminal-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753701153/terminal_urndvw.webp"
                    alt="Terminal icon "
                  />
                  <p>Terminal</p>
                </div>
              </div>
            </section>
            <section className="projects-section" id="achievements">
              <div className="head">
                <div className="line"></div>
                <span>TAKE A LOOK AT MY</span>
                <h2>PROFESSIONAL ACHIEVEMENTS</h2>
              </div>
              <div className="projects-container">
                <div className="project-img-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753700062/DS-Analytics_wuruwt.webp"
                    alt="Screenshot of analytics dashboard"
                  />
                </div>
                <div className="project-description-container">
                  <h1>Dealer Studio's Analytics Dashboard</h1>
                  <h4>
                    Main Technologies Used:
                    <span className="blue-text">
                      {" "}
                      React.js, Ruby on Rails, PostgreSQL, Chart.js, DnD kit,
                      Heroku{" "}
                    </span>{" "}
                  </h4>
                  <ul>
                    <li>
                      Fully customisable drag and drop{" "}
                      <span className="blue-text">Analytics Dashboard</span>
                    </li>
                    <li>
                      Data visualised using{" "}
                      <span className="blue-text">Chart.js</span>, with the
                      ability to choose from a variety of chart types
                    </li>
                    <li>
                      Backend built with{" "}
                      <span className="blue-text">
                        Ruby on Rails, PostgreSQL
                      </span>{" "}
                      and deployed on <span className="blue-text">Heroku</span>
                    </li>
                    <li>
                      User layouts saved to the{" "}
                      <span className="blue-text">database</span> and loaded on
                      subsequent visits
                    </li>
                    <li>
                      Fully integrated with{" "}
                      <span className="blue-text">
                        GA4, Facebooks Ads and Google Ads
                      </span>{" "}
                      API's showing real business data.
                    </li>
                    <li>
                      Also integrated with our{" "}
                      <span className="blue-text">
                        Dealer Studio's internal API
                      </span>{" "}
                      to show lead data from our own system and client websites
                    </li>
                  </ul>
                  <h3>
                    I was the primary developer on this project, developing both
                    the front end and back end sides of the dashboard since it's
                    conception
                  </h3>
                  <h4>
                    This product is behind a paywall, so I can't share the link,
                    sorry!
                  </h4>
                </div>
              </div>
            </section>
            <section className="projects-section" id="projects">
              <div className="head">
                <div className="line"></div>
                <span>HERE ARE SOME OF MY</span>
                <h2>PERSONAL PROJECTS</h2>
              </div>
              <div className="projects-container">
                <div className="project-img-container">
                  <img
                    src="https://res.cloudinary.com/duufztjco/image/upload/v1753700424/tictactoe_l9aikr.webp"
                    alt="Screenshot of Tic Tac Toe game"
                  />
                </div>
                <div className="project-description-container">
                  <h1>Multiplayer Tic Tac Toe</h1>
                  <h4>
                    Main Technologies Used:
                    <span className="blue-text">
                      {" "}
                      React.js, Socket.io, Node.js, Express.js, Tailwind CSS &
                      Railway
                    </span>{" "}
                  </h4>
                  <ul>
                    <li>
                      Online multiplayer Tic Tac Toe game with
                      <span className="blue-text"> real time </span> game
                      updates using <span className="blue-text">Socket.io</span>
                    </li>
                    <li>
                      Backend and frontend send and recieve events to eachother
                      through <span className="blue-text">WebSockets</span>
                    </li>
                    <li>
                      Backend built with{" "}
                      <span className="blue-text">Node.js, Express.js</span> and
                      deployed on <span className="blue-text">Railway</span>
                    </li>
                    <li>
                      The game is built with{" "}
                      <span className="blue-text">Tailwind CSS</span> for
                      styling and <span className="blue-text">React.js</span>{" "}
                      for the frontend
                    </li>
                    <li>
                      Users can play against each other in{" "}
                      <span className="blue-text">real time</span>, with the
                      ability to join games via a game id
                    </li>
                  </ul>
                </div>
                <div className="project-links-container">
                  <a
                    href="https://tictactoe-multiplayer-production-a919.up.railway.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-link"></i>
                    <p>View Project</p>
                  </a>
                  <a
                    href="https://github.com/kimey-robertson/tictactoe-multiplayer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
                    <p>View Code</p>
                  </a>
                </div>
              </div>
            </section>
            <section className="contact-section" id="contact">
              <div className="head">
                <div className="line"></div>
                <span>SAY HELLO</span>
                <h2>CONTACT</h2>
              </div>
              <div className="contact-container">
                <div className="contact-form-or-email">
                  <h3>Contact Form</h3>
                  <h5>OR</h5>
                  <a
                    href="mailto:kimey.robertson@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="email-me-container"
                  >
                    <div className="email-icon-container">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <p>Email me</p>
                  </a>
                </div>
                <form
                  className="contact-form-grid"
                  id="contact-form"
                  action="https://formspree.io/f/mbjekdrq"
                  method="post"
                >
                  <input
                    type="text"
                    className="form-input"
                    id="name-input"
                    name="name-input"
                    required
                    placeholder="Your Name*"
                  />
                  <input
                    type="text"
                    className="form-input"
                    id="email-input"
                    name="email-input"
                    required
                    placeholder="Your Email*"
                  />
                  <input
                    type="text"
                    className="form-input"
                    id="subject-input"
                    name="subject-input"
                    required
                    placeholder="Subject*"
                  />
                  <textarea
                    type="text"
                    className="form-input"
                    id="message-input"
                    name="message-input"
                    required
                    placeholder="Your Message*"
                  />
                </form>
                <button form="contact-form" id="form-button">
                  Send
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
