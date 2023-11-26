import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { GlobalStyles } from './global.styles';

import CardProvider from '@/context/CardContext';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Interactive card details form',
  description: 'Interactive Card',
}

const myFont = localFont({ src: '../../public/fonts/SpaceGrotesk-Medium.ttf' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <GlobalStyles />
        <CardProvider>
          {children}
        </CardProvider>
      </body>
    </html>
  )
}
