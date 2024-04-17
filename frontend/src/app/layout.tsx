import './styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Banana</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
