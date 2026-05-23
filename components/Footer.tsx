export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__left">
          <span className="footer__copy">© 2026 · Ethan Palosh</span>
        </div>

        <nav className="footer__cols" aria-label="Footer navigation">
          <div className="footer__col">
            <span className="footer__col-head">Connect</span>
            <a href="https://www.linkedin.com/in/ethanpalosh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/epalosh/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:ethanpalosh@gmail.com">Email</a>
          </div>
          <div className="footer__col">
            <span className="footer__col-head">Website Archive</span>
            <a href="/archive/v1.0/">v1.0</a>
            <a href="/archive/v2.0/">v2.0</a>
            <a href="/">v3.0</a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
