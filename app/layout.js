export const metadata = {
  title: "Looplex OpenAPI",
  description: "Documentação de APIs da Looplex",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
