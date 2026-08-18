export default function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: '2rem',
        padding: '3rem 3rem 1.5rem',
      }}
    >
      <div style={{ fontSize: '1.6rem', lineHeight: 1.2, color: 'rgb(248,211,128)' }}>
        amanda.weeyl@gmail.com
      </div>
      <div style={{ fontSize: '1.6rem', lineHeight: 1.2, color: 'rgba(255,255,255,0.75)' }}>
        &copy;2026
      </div>
    </footer>
  )
}
