import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <span className="home-heading card-Heading">Jason Messmore</span>
          <div className="home-links-container">
            <span className="home-link navbar-Link">About</span>
            <span className="home-link01 navbar-Link">Experience</span>
            <span className="home-link02 navbar-Link">Portofolio</span>
            <span className="home-link03 navbar-Link">Contact</span>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <span className="card-Heading home-heading1">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link04 navbar-Link">About</span>
              <span className="home-link05 navbar-Link">Experience</span>
              <span className="home-link06 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container2">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading2">
              <span>Full Stack Web Developer from Columbus, Ohio</span>
              <br></br>
            </h1>
            <span className="home-text02">
              Passionate about technology from a young age, I have built my
              proficiency in HTML, CSS, JavaScript, and Python.
            </span>
            <div className="home-cta-btn-container">
              <button className="home-cta-btn anchor button">
                <span className="home-text03">MY WORK</span>
              </button>
              <button className="home-cta-btn1 button anchor">ABOUT ME</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?cs=srgb&amp;dl=pexels-pixabay-270557.jpg&amp;fm=jpg"
            loading="eager"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text04">Experience</h2>
          <span className="home-text05">
            <span className="section-Text">
              Bachelor&apos;s in New Media &amp; Communication Technology
            </span>
            <br></br>
            <span>Minor in Business</span>
            <br></br>
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="home-icon04"
              >
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </div>
            <div className="home-content-container">
              <span className="home-heading3 card-Heading">
                Inside Sales Account Manager
              </span>
              <span className="home-text10">
                Used various campaign building strategies to increase E-Commerce
                revenue over 300% compared to previous year MTD. Retained new
                customers and managed relationships with CRM software.
              </span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading4">
                <span className="home-text11 card-Heading">
                  AWS API Gateway Integration
                </span>
                <br></br>
              </span>
              <span className="home-text13">
                Utilizing Amazon Web Services to create RESTful APIs optimized
                for serverless workloads and HTTP backends using HTTP APIs.
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 865.7188571428571 1024" className="home-icon08">
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading5 card-Heading">
                Website Development
              </span>
              <span className="home-text14 card-Text">
                Built a solid proficiency in several web technologies such as
                HTML, CSS, JavaScript, AWS, and NoSQL databases.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="home-max-content-width-container">
          <div className="home-heading-container1">
            <h1 className="home-text15">Professional Socials</h1>
          </div>
          <div className="home-content-container3">
            <div className="home-about-1">
              <div className="home-container3">
                <a
                  href="https://www.linkedin.com/in/jasonmessmore/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link08"
                >
                  <img
                    alt="image"
                    src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png"
                    className="home-image1"
                  />
                </a>
              </div>
              <a
                href="https://github.com/JasonMessmore"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <img
                  alt="image"
                  src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
                  className="home-image2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>
      <div className="home-subscribe">
        <img
          alt="image"
          src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
          loading="eager"
          className="home-image3"
        />
        <div className="home-container4">
          <div className="home-heading-container2">
            <h1 className="home-text16 section-Heading">
              Let&apos;s work together!
            </h1>
            <span className="home-text17">
              Get your dream website started today by entering your email below.
              I typically respond within 24 hours.
            </span>
          </div>
          <input
            type="text"
            required="true"
            placeholder="E-mail"
            className="home-textinput section-Text input"
          />
          <button className="home-button anchor button">SEND</button>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links"></div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="home-link10 anchor">Copyright, 2022</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
