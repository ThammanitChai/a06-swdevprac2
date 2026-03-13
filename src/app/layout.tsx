import TopMenu from "@/components/TopMenu"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>

        <TopMenu />

        {children}

      </body>
    </html>
  )
}