export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>ChatChat | Register</title>
      </head>
      <body>
        <div className="w-full min-h-screen">{children}</div>
      </body>
    </html>
  )
}
