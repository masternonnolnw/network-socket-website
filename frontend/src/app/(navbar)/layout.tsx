import Typography from '@/common/components/base/Typography'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Banana | Landing</title>
      </head>
      <body>
        <div className="flex flex-col">
          {/* Navbar */}
          <div className="flex flex-row w-full h-[100px] items-center p-6 bg-primary">
            {/* Mock Logo */}
            <div className="flex w-[250px] h-[60px] bg-slate-700 mr-[100px]" />

            <div className="flex flex-row gap-2">
              <Typography variant="h4" className="ml-4 text-white">
                Banana Website
              </Typography>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
