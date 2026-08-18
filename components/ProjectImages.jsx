import Image from 'next/image'

function renderImage(src, alt, aspectRatio, fit = 'contain') {
  return (
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
}

function renderSection(section, idx) {
  const { layout, images } = section
  const topMargin = idx > 0 ? '1rem' : 0

  if (layout === 'tall-media') {
    return (
      <div key={idx} style={{ display: 'flex', justifyContent: 'center', marginTop: topMargin }}>
        <div className="tall-media" style={{ width: '72%', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {images.map((img) => renderImage(img.src, img.alt, img.aspectRatio, img.fit))}
        </div>
      </div>
    )
  }

  if (layout === 'full-stacked') {
    return (
      <div key={idx} style={{ marginTop: topMargin }}>
        {images.map((img, i) => (
          <div key={img.src} style={{ marginTop: i > 0 ? '1rem' : 0 }}>
            {renderImage(img.src, img.alt, img.aspectRatio, img.fit)}
          </div>
        ))}
      </div>
    )
  }

  const colCount = parseInt(layout.split('-')[1], 10)
  const gridClassName = colCount > 1 ? `g${colCount}` : undefined
  const gap = colCount === 4 ? '0.6rem' : '1rem'

  return (
    <div
      key={idx}
      className={gridClassName}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
        gap,
        marginTop: topMargin,
      }}
    >
      {images.map((img) => renderImage(img.src, img.alt, img.aspectRatio, img.fit))}
    </div>
  )
}

export default function ProjectImages({ project }) {
  const sections = project.sections || [{ layout: project.layout || 'grid-3', images: project.images }]
  return <>{sections.map((section, idx) => renderSection(section, idx))}</>
}
