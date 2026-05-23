export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="sechead reveal">
          <h2>About Me!</h2>
        </div>
        <div className="about">
          <div className="about__photo reveal">
            <img src="/images/Profile_Photo.JPG" alt="Ethan Palosh" />
          </div>
          <div className="about__copy reveal" style={{ transitionDelay: '120ms' }}>
            <div className="about__edu">
              <span className="kicker">Education</span>
              <h4 className="about__school">USC Viterbi School of Engineering</h4>
              <p className="about__degree">
                B.S. Computer Engineering &amp; Computer Science + M.S. in Computer Science
              </p>
              <p className="about__when">Both expected May 2027</p>
              <div className="about__honors">
                <span>Presidential Scholar</span>
                <span>4× Dean&apos;s List</span>
              </div>
            </div>

            <p>My background includes traditional software development, applied AI + ML, and robotics. I thrive in fast-paced environments that demand quick thinking and adaptability. Lately, my work has focused on real-world applications of machine learning, and I'm especially drawn to applying my skills to new domains where fresh technical challenges await.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
