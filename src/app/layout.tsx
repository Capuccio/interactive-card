import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { GlobalStyles } from './global.styles';

import CardProvider from '@/context/CardContext';

export const metadata: Metadata = {
  title: 'Interactive card',
  description: 'Interactive Card challenge by Frontend Mentor',
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
