import type { Metadata } from 'next'
import { GlobalStyles } from './global.styles';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Interactive card details form',
  description: 'Interactive Card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <GlobalStyles />
      </body>
    </html>
  )
}
