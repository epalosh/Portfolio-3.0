export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__grid">
          {/* Name tile */}
          <article className="tile h-name reveal">
            <div className="h-name__stars" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
            <div className="h-name__inner">
              <div className="h-name__text">
                <div>
                  <h1>Ethan Palosh</h1>
                  <p className="role">Full-Stack · Applied AI · Embedded</p>
                </div>
                <div className="h-name__foot">
                  <p className="h-name__blurb">
                    Full-stack software engineer with experience working on enterprise and consumer software. Particular interests include applied AI and frontier technologies. Additional expertise in embedded systems & robotics.
                  </p>
                </div>
              </div>
              <div className="h-name__portrait">
                <img src="/images/Profile_Photo.JPG" alt="Ethan Palosh" />
              </div>
            </div>
          </article>

          {/* Currently building */}
          <article
            className="tile h-side h-current reveal"
            style={{ transitionDelay: '60ms' }}
          >
            <span className="kicker">Currently building at:</span>
            <div className="h-side__body">
              <div className="h-side__val">
                <span className="h-side__glyph" aria-hidden="true">
                  ⟢
                </span>
                Nominal
              </div>
              <div className="h-side__sub">Series B · Software Engineering</div>
            </div>
          </article>

          {/* Graduating */}
          <article
            className="tile h-side h-status reveal"
            style={{ transitionDelay: '100ms' }}
          >
            <span className="kicker">Graduating:</span>
            <div className="h-side__body">
              <div className="h-side__val">May 2027</div>
              <div className="h-side__sub">B.S. Computer Engineering + M.S. Computer Science</div>
            </div>
          </article>

          {/* LinkedIn */}
          <article
            className="tile h-linkedin reveal"
            style={{ transitionDelay: '140ms' }}
          >
            <a className="proj__link" href="https://www.linkedin.com/in/ethanpalosh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" />
            <span className="kicker">Find out more:</span>
            <div className="h-linkedin__body">
              <div className="h-linkedin__label">
                <svg className="h-linkedin__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" /></svg>
                LinkedIn<svg className="h-linkedin__ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
              <span className="h-linkedin__sub"></span>
            </div>
          </article>

          {/* Ask me about */}
          <article className="tile h-ask reveal" style={{ transitionDelay: '180ms' }}>
            <div className="h-ask__left">
              <span className="kicker">my hobbies</span>
              <h3 className="h-ask__lead">Ask me about... <span>things I love!</span></h3>
            </div>
            <div className="h-ask__interests">
              <div className="h-ask__interest">
                <svg viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: 'rotate(30deg)' }}>
                  <line x1="4" y1="2" x2="4" y2="30"/>
                  <rect x="4" y="2" width="16" height="12"/>
                  <rect x="4"  y="2"  width="4" height="3" fill="currentColor" stroke="none"/>
                  <rect x="12" y="2"  width="4" height="3" fill="currentColor" stroke="none"/>
                  <rect x="8"  y="5"  width="4" height="3" fill="currentColor" stroke="none"/>
                  <rect x="16" y="5"  width="4" height="3" fill="currentColor" stroke="none"/>
                  <rect x="4"  y="8"  width="4" height="3" fill="currentColor" stroke="none"/>
                  <rect x="12" y="8"  width="4" height="3" fill="currentColor" stroke="none"/>
                  <rect x="8"  y="11" width="4" height="3" fill="currentColor" stroke="none"/>
                  <rect x="16" y="11" width="4" height="3" fill="currentColor" stroke="none"/>
                </svg>
                <span>Motorsport</span>
              </div>
              <div className="h-ask__interest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 20l7-11 4 5 3-4 6 10H2z"/>
                  <circle cx="18" cy="4" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
                <span>Skiing</span>
              </div>
              <div className="h-ask__interest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5.5" y="1" width="13" height="14" rx="3"/>
                  <rect x="10.5" y="15" width="3" height="8" rx="1.5"/>
                </svg>
                <span>Pickleball</span>
              </div>
              <div className="h-ask__interest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <span>Photography</span>
              </div>
              <div className="h-ask__interest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="16" cy="13" r="7"/>
                  <path d="M2 3v4m2-4v4m2-4v4M2 7c0 1.7 4 1.7 4 0"/>
                  <line x1="4" y1="9" x2="4" y2="21"/>
                </svg>
                <span>Food</span>
              </div>
              <div className="h-ask__interest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <g transform="rotate(45 12 12)">
                    <rect x="2" y="10" width="3" height="4" rx="1"/>
                    <rect x="6" y="8" width="2" height="8" rx="1"/>
                    <rect x="16" y="8" width="2" height="8" rx="1"/>
                    <rect x="19" y="10" width="3" height="4" rx="1"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                  </g>
                </svg>
                <span>Working Out</span>
              </div>
            </div>
          </article>

          {/* Projects/Ventures */}
          <a
            className="tile h-writing reveal"
            href="#graveyard"
            style={{ transitionDelay: '220ms' }}
          >
            <div className="h-writing__left">
              <span className="kicker">My Work</span>
              <h3 className="h-writing__lead">
                Projects/Ventures <span>past &amp; in progress</span>
              </h3>
              
            </div>
            <div className="h-writing__logos" aria-hidden="true">
              <span className="logo-slot"><img src="/images/satori-inference-logo.png" alt="" /></span>
              <span className="logo-slot"><img src="/images/oasis_logo.png" alt="" /></span>
              <span className="logo-slot"></span>
              <span className="logo-slot"><img src="/images/thumbnail_detailer.png" alt="" /></span>
            </div>
          </a>
        </div>

        <a href="#experience" className="hero__scroll" aria-label="Scroll to experience">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
          <span>See more</span>
        </a>
      </div>
    </section>
  )
}
