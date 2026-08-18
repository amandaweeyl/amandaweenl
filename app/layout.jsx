import './globals.css'

export const metadata = {
  title: 'Amanda Wee — Visual Designer',
  description:
    'I design campaigns, web, and UI experiences informed by strategy and cultural insight. View my portfolio of work for brands like H&M, 3M, SG Alliance, and AIA.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'var(--font-diatype)' }}>{children}</body>
    </html>
  )
}
