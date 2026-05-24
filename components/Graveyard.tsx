export default function Graveyard() {
  return (
    <section className="section" id="graveyard">
      <div className="wrap">
        <div className="sechead reveal">
          <h2>Projects/Ventures</h2>
        </div>

        <div className="projects projects--3up">
          <article className="proj reveal">
            <div className="proj__art">
              <img src="/images/satoriinferenceproductpreview.png" alt="Satori Inference" />
            </div>
            <div className="proj__copy">
              <div className="proj__head">
                <img className="proj__logo" src="/images/satori-inference-logo.png" alt="" aria-hidden="true" />
                <h3>Satori Inference</h3>
              </div>
              <p>Satori Inference is an agentic operational data platform, purpose-built for manufacturing companies. We enable our customers to consolidate their manufacturing-specific data sources and design powerful analytics tools to dissect and improve their operations with just natural language.</p>
              <div className="proj__stack">
                <span>Agentic AI</span>
                <span>Enterprise</span>
                <span>AWS</span>
                <span>Data Engineering</span>
              </div>
              <div className="proj__links">
                <a className="proj__btn proj__btn--primary" href="https://www.satori-inference.com/" target="_blank" rel="noopener noreferrer" aria-label="Website">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.5" />
                    <path d="M8 1.5C8 1.5 5.5 4 5.5 8s2.5 6.5 2.5 6.5M8 1.5C8 1.5 10.5 4 10.5 8S8 14.5 8 14.5M1.5 8h13" strokeLinecap="round" />
                  </svg>
                  Website
                </a>
                <a className="proj__btn" href="https://app.satori-inference.com" target="_blank" rel="noopener noreferrer" aria-label="Live Platform">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="1.5" y="2.5" width="13" height="9" rx="1.5" />
                    <path d="M5.5 14.5h5M8 11.5v3" strokeLinecap="round" />
                    <circle cx="8" cy="7" r="1.5" fill="currentColor" stroke="none" />
                    <path d="M5.2 9.8A4 4 0 0 1 4 7a4 4 0 0 1 1.2-2.8M10.8 4.2A4 4 0 0 1 12 7a4 4 0 0 1-1.2 2.8" strokeLinecap="round" />
                  </svg>
                  Live Platform
                </a>
              </div>
            </div>
          </article>

          <article className="proj reveal" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
            <div className="proj__art">
              <img src="/images/oasisproductpreview.png" alt="Oasis" />
            </div>
            <div className="proj__copy">
              <div className="proj__head">
                <img className="proj__logo" src="/images/oasis_logo.png" alt="" aria-hidden="true" />
                <h3>Oasis</h3>
              </div>
              <p>Oasis is a hardware ecosystem that uses vision-based AI techniques to detect dangerous events (such as falls, respiratory distress, and calls for help). We implement research-backed approaches to identify and characterize these events in real-time. Calculations are performed on-device, providing data security and economical operation.</p>
              <div className="proj__stack">
                <span>Computer Vision</span>
                <span>Edge AI</span>
                <span>Hardware</span>
                <span>Consumer</span>
              </div>
              <div className="proj__links">
                <a className="proj__btn proj__btn--primary" href="https://drive.google.com/file/d/1wPBi1141VHwYWNmiUE421x3_ZUdiOig1/view" target="_blank" rel="noopener noreferrer" aria-label="Demo">
                  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M3 2.5a.5.5 0 0 1 .765-.424l10 5.5a.5.5 0 0 1 0 .848l-10 5.5A.5.5 0 0 1 3 13.5v-11z" />
                  </svg>
                  Demo
                </a>
                <a className="proj__btn" href="https://github.com/epalosh/Oasis/blob/main/2.2.py" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.96 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.08-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="proj proj--detailer reveal" style={{ '--reveal-delay': '200ms' } as React.CSSProperties}>
            <div className="proj__art">
              <img src="/images/detailerproductpreview.png" alt="Detailer" />
            </div>
            <div className="proj__copy">
              <div className="proj__head">
                <img className="proj__logo" src="/images/thumbnail_detailer.png" alt="" aria-hidden="true" />
                <h3>Detailer (iOS App)</h3>
              </div>
              <p>
                Introducing Detailer, a publicly available communication app built for families
                with college students. Developed using industry standard techniques for
                persistence, user data, and remote notifications. Utilizes Google Cloud for
                storage and authentication. AI integration for core app features, offering a
                personalized experience.
              </p>
              <div className="proj__stack">
                <span>Swift</span>
                <span>JavaScript</span>
                <span>Firebase</span>
                <span>Cloud Functions</span>
                <span>OpenAI API</span>
              </div>
              <div className="proj__links">
                <a className="proj__btn proj__btn--primary" href="https://apps.apple.com/us/app/detailer-stay-connected/id6504883187" target="_blank" rel="noopener noreferrer" aria-label="App Store">
                  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M11.182 8.155c.018-1.85 1.51-2.74 1.578-2.78-.86-1.257-2.195-1.43-2.668-1.45-1.136-.115-2.218.668-2.795.668-.587 0-1.475-.654-2.426-.635C3.66 3.979 2.52 4.69 1.892 5.78c-1.247 2.166-.318 5.367.898 7.124.597.86 1.306 1.825 2.235 1.79.898-.036 1.236-.578 2.32-.578 1.083 0 1.388.578 2.336.561.967-.018 1.577-.876 2.166-1.74.683-.997.964-1.965.98-2.014-.022-.011-1.879-.722-1.897-2.864zM9.397 2.86c.49-.595.82-1.42.73-2.241-.706.028-1.561.47-2.066 1.063-.453.525-.85 1.366-.744 2.17.787.06 1.59-.4 2.08-.992z" />
                  </svg>
                  App Store
                </a>
                <a className="proj__btn" href="/Detailer" aria-label="Website">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.5" />
                    <path d="M8 1.5C8 1.5 5.5 4 5.5 8s2.5 6.5 2.5 6.5M8 1.5C8 1.5 10.5 4 10.5 8S8 14.5 8 14.5M1.5 8h13" strokeLinecap="round" />
                  </svg>
                  Website
                </a>
                <a className="proj__btn" href="https://github.com/epalosh/Detailer_Public" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.96 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.08-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
