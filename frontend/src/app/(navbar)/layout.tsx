import Navbar from './_components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Banana | Landing</title>
      </head>
      <body>
        <div className="flex flex-col">
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
