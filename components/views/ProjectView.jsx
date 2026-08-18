import ProjectImages from '../ProjectImages.jsx'

export default function ProjectView({ project, onNavigate }) {
  return (
    <>
      <div className="proj-intro" style={{ maxWidth: '75rem' }}>
        <div style={{ fontSize: '3.8rem', lineHeight: 1, color: 'rgba(255,255,255,0.85)' }}>
          {project.client} / {project.title}
        </div>

        {project.description.map((desc, idx) => (
          <p
            key={idx}
            style={{
              fontSize: '1.8rem',
              lineHeight: 1.2,
              color: 'rgba(255,255,255,0.85)',
              margin: idx === 0 ? '1.4em 0 0' : '1.2em 0 0',
            }}
          >
            {desc}
          </p>
        ))}

        <div
          style={{
            fontFamily: 'var(--font-diatype-mono)',
            fontVariationSettings: "'MONO' 1",
            fontSize: '1.5rem',
            lineHeight: 1.3,
            color: 'rgba(255,255,255,0.4)',
            marginTop: '1.6em',
          }}
        >
          SCOPE &darr;
        </div>
        <div style={{ fontSize: '1.8rem', lineHeight: 1.3, color: 'rgba(255,255,255,0.85)', marginTop: '0.4em' }}>
          {project.scope.join(' / ')}
        </div>

        {project.liveLink && (
          <>
            <div
              style={{
                fontFamily: 'var(--font-diatype-mono)',
                fontVariationSettings: "'MONO' 1",
                fontSize: '1.5rem',
                lineHeight: 1.3,
                color: 'rgba(255,255,255,0.4)',
                marginTop: '1.6em',
              }}
            >
              LIVE PAGE &darr;
            </div>
            <div style={{ fontSize: '1.8rem', lineHeight: 1.3, color: 'rgba(255,255,255,0.85)', marginTop: '0.4em' }}>
              <a
                href={project.liveLink.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                {project.liveLink.label}
              </a>
              {project.liveLink.note && (
                <>
                  <br />
                  <span style={{ fontStyle: 'italic' }}>{project.liveLink.note}</span>
                </>
              )}
            </div>
          </>
        )}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <ProjectImages project={project} />
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem', fontSize: '1.8rem' }}>
        <span
          onClick={() => onNavigate('index')}
          style={{ cursor: 'pointer', textDecoration: 'underline', color: 'rgba(255,255,255,0.85)' }}
        >
          Return to Selected Works
        </span>
      </div>
    </>
  )
}
