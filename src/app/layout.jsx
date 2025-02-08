import ThemeToggle from '@/components/ThemeToggle'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="size-36">hola mundo</div>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
