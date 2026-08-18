export default function Header({ onNavigate }) {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '2rem',
        padding: '3rem',
      }}
    >
      <div>
        <div
          onClick={() => onNavigate('index')}
          className="brand clickable"
          style={{
            cursor: 'pointer',
            fontSize: '3.8rem',
            lineHeight: 1,
            fontWeight: 700,
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: 0,
          }}
        >
          AMANDA WEE
        </div>
        <div style={{ fontSize: '1.8rem', lineHeight: 1.2, marginTop: '0.15em' }}>
          <span style={{ color: 'rgb(248,211,128)' }}>Visual Designer</span>
        </div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div
          onClick={() => onNavigate('about')}
          className="clickable"
          style={{
            cursor: 'pointer',
            fontSize: '2rem',
            lineHeight: 1.2,
            color: 'rgba(255,255,255,0.75)',
          }}
        >
          About
        </div>
      </div>
    </header>
  )
}
