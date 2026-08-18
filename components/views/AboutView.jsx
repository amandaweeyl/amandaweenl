import Image from 'next/image'

export default function AboutView({ about, onNavigate }) {
  return (
    <div
      className="about-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr 7fr',
        gap: '2rem',
        alignItems: 'start',
      }}
    >
      <div className="about-portrait-wrap" style={{ gridColumn: 1 }}>
        <div style={{ width: '100%', aspectRatio: '1 / 1', position: 'relative', overflow: 'hidden', background: '#111' }}>
          <Image
            src="/assets/about-page-image.png"
            alt="Portrait of Amanda"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 760px) 60vw, 25vw"
          />
        </div>
      </div>

      <div className="about-text" style={{ gridColumn: 3 }}>
        <div style={{ fontSize: '1.8rem', lineHeight: 1.2, color: 'rgba(255,255,255,0.85)' }}>
          <div style={{ color: 'rgb(248,211,128)', fontWeight: 700 }}>About</div>
          <p style={{ margin: '0.2em 0 0' }}>{about.introduction}</p>

          <div style={{ marginTop: '1.2em' }}>
            {about.services.map((service, idx) => (
              <span key={service}>
                &bull;&nbsp;&nbsp;{service}
                {idx < about.services.length - 1 && <br />}
              </span>
            ))}
          </div>

          <p style={{ margin: '1.2em 0 0', fontStyle: 'italic' }}>{about.availability}</p>

          <div style={{ color: 'rgb(248,211,128)', fontWeight: 700, marginTop: '1.6em' }}>Key Skills</div>
          <div>{about.skills.join(' / ')}</div>

          <div style={{ color: 'rgb(248,211,128)', fontWeight: 700, marginTop: '1.6em' }}>
            Relevant Experience
          </div>
          <div>{about.experience[0].title}</div>
          <div style={{ color: 'rgba(93,93,93,0.85)' }}>
            {about.experience.slice(1).map((exp, idx) => (
              <span key={exp.title}>
                {exp.title}, {exp.period}
                {idx < about.experience.length - 2 && <br />}
              </span>
            ))}
          </div>

          <div style={{ color: 'rgb(248,211,128)', fontWeight: 700, marginTop: '1.6em' }}>Contact</div>
          <div style={{ color: 'rgba(255,255,255,0.85)' }}>{about.contact.email}</div>
          <div>
            <a
              href={about.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline', color: 'rgba(255,255,255,0.85)' }}
            >
              LinkedIn
            </a>
          </div>

          <div style={{ marginTop: '1.2em' }}>
            <span
              onClick={() => onNavigate('index')}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              View Selected Works
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
