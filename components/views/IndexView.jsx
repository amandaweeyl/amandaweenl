import Image from 'next/image'

export default function IndexView({ projects, onProjectClick }) {
  return (
    <>
      <div
        className="intro"
        style={{
          fontSize: '2.6rem',
          lineHeight: 1.2,
          color: 'rgba(255,255,255,0.85)',
          maxWidth: '36ch',
          marginBottom: '4.5rem',
        }}
      >
        I design campaigns, web, and UI experiences informed by strategy and cultural insight.
      </div>

      <div style={{ fontSize: '2rem', lineHeight: 1.2, color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem' }}>
        Selected Works
      </div>

      <div
        className="g3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          columnGap: '1rem',
          rowGap: '3.2rem',
          alignItems: 'start',
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectClick(project.slug)}
            style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
          >
            <div style={{ width: '100%', aspectRatio: '1 / 1', position: 'relative', overflow: 'hidden', background: '#111' }}>
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div
              className="thumb-cap"
              style={{
                marginTop: '0.7em',
                textAlign: 'center',
                fontSize: '1.6rem',
                lineHeight: 1.3,
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              {project.client} — {project.title}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
