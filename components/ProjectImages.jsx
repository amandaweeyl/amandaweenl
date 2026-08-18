import Image from 'next/image'

export default function ProjectImages({ project }) {
  const renderImage = (src, alt, aspectRatio, fit = 'contain') => (
    <div
      key={src}
      style={{ minWidth: 0, aspectRatio: aspectRatio || '1 / 1', position: 'relative', background: '#111' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: fit === 'cover' ? 'cover' : 'contain' }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 75vw"
      />
    </div>
  )

  const layout = project.layout || 'grid-3'

  if (layout === 'full-width') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="tall-media" style={{ width: '72%', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {project.images.map((img) => renderImage(img.src, img.alt, img.aspectRatio, img.fit))}
        </div>
      </div>
    )
  }

  if (layout === 'stacked') {
    return (
      <>
        {project.images.map((img) => (
          <div key={img.src} style={{ marginTop: '1rem' }}>
            {renderImage(img.src, img.alt, img.aspectRatio, img.fit)}
          </div>
        ))}
      </>
    )
  }

  const colCount = parseInt(layout.split('-')[1], 10)
  const gridClassName = `g${colCount}`
  const gap = colCount === 4 ? '0.6rem' : '1rem'

  return (
    <div
      className={gridClassName}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
        gap,
      }}
    >
      {project.images.map((img) => renderImage(img.src, img.alt, img.aspectRatio, img.fit))}
    </div>
  )
}
