export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>ChatChat</title>
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
