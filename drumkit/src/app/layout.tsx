
export const metadata = {
  title: 'Drum Kit',
  description: 'I go crazy when I hear a cymbal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
