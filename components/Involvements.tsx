export default function Involvements() {
  return (
    <section className="section" id="involvements">
      <div className="wrap">
        <div className="sechead reveal">
          <h2>Involvements</h2>
        </div>

        <div className="projects">
          <article className="proj proj--inv reveal">
            <a className="proj__link" href="https://usclavalab.org" target="_blank" rel="noopener noreferrer" aria-label="LavaLab" />
            <div className="proj__art">
              <img src="/images/lavalabpreview.JPG" alt="LavaLab" style={{ objectPosition: 'center 85%' }} />
            </div>
            <div className="proj__copy">
              <div className="proj__copy-text">
                <div className="proj__head">
                  <h3>LavaLab</h3>
                </div>
                <p>USC's premier startup incubator program. A highly selective organization with semester-long cohorts, teaching ambitious technical founders the skills to thrive in fast-paced startup environments.</p>
                <div className="proj__stack">
                  <span>Leadership</span>
                  <span>Software Engineering</span>
                  <span>Entrepreneurship</span>
                </div>
              </div>
              <img className="proj__logo" src="/images/thumbnail_lavalab-CraXOGW9.png" alt="" aria-hidden="true" />
            </div>
          </article>

          <article className="proj proj--inv reveal" style={{ transitionDelay: '100ms' }}>
            <a className="proj__link" href="https://www.uscformulasae.com/" target="_blank" rel="noopener noreferrer" aria-label="USC Racing" />
            <div className="proj__art">
              <img src="/images/USCRacingpreview.JPG" alt="USC Racing" style={{ objectPosition: 'center 50%' }} />
            </div>
            <div className="proj__copy">
              <div className="proj__copy-text">
                <div className="proj__head">
                  <h3>USC Racing</h3>
                </div>
                <p>USC Racing is a university project team that designs, constructs, and tests a student-built formula-style race car for international competition. The electronics subteam is reponsible for electrical and software systems on the car.</p>
                <div className="proj__stack">
                  <span>Embedded Systems</span>
                  <span>Hardware Engineering</span>
                  <span>Motorsport</span>
                </div>
              </div>
              <img className="proj__logo" src="/images/thumbnail_racing-Cc19NbUi.png" alt="" aria-hidden="true" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
