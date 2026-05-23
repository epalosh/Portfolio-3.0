interface ExperienceEntry {
  abbr: string
  company: string
  role: string
  when: string
  current: boolean
  logo: string
  href: string
}

const experiences: ExperienceEntry[] = [
  { abbr: 'FRC', company: 'FRC Robotics', role: 'Software Developer', when: '2022-2023', current: false, logo: '/images/thumbnail_roboticsLogo-kHIFq-eq.png', href: 'https://www.thebluealliance.com/team/2468/2023' },
  { abbr: 'NSA', company: 'NASA', role: 'Research Intern', when: 'Summer 2022', current: false, logo: '/images/thumbnail_nasa-DvEIXjY2.png', href: 'https://agu.confex.com/agu/fm22/meetingapp.cgi/Paper/1122339' },
  { abbr: 'USC', company: 'USC Racing', role: 'Software Engineer', when: '2023-Present', current: true, logo: '/images/thumbnail_racing-Cc19NbUi.png', href: 'https://www.uscformulasae.com/' },
  { abbr: 'FF', company: 'Foreflight', role: 'Software Engineer Intern', when: 'Summer 2024', current: false, logo: '/images/thumbnail_foreflight-BXGfhjUe.png', href: 'https://foreflight.com/' },
  { abbr: 'LL', company: 'Lavalab', role: 'Software Developer', when: '2025-Present', current: true, logo: '/images/thumbnail_lavalab-CraXOGW9.png', href: 'https://usclavalab.org/' },
  { abbr: 'MS', company: 'Microsoft', role: 'Software Engineer Intern', when: 'Summer 2025', current: false, logo: '/images/thumbnail_microsoft-CIhvDL5j.png', href: 'https://learn.microsoft.com/en-us/azure/foundry/' },
  { abbr: 'NM', company: 'Nominal', role: 'Software Engineer Intern', when: 'Summer 2026', current: true, logo: '/images/thumbnail_nominal.jpg', href: 'https://nominal.io/' },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="sechead reveal">
          <h2>Experience</h2>
        </div>

        <div className="timeline reveal">
          <ol className="tl-rail">
            {experiences.map((exp) => (
              <li
                key={exp.abbr}
                className="tl-node"
                {...(exp.current ? { 'data-current': 'true' } : {})}
              >
                <span className="stem" aria-hidden="true"></span>
                <span className="tl-mark" aria-hidden="true"></span>
                <a className="tl-card" href={exp.href} target="_blank" rel="noopener noreferrer">
                  <span className="tl-logo">
                    <img src={exp.logo} alt={exp.company} />
                  </span>
                  <div className="tl-body">
                    <h3 className="tl-co">{exp.company}</h3>
                    <p className="tl-role">{exp.role}</p>
                    <span className="tl-when">{exp.when}</span>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
