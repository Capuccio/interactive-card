import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { GlobalStyles } from './global.styles';
import CardProvider from '@/context/CardContext';
import { StyledComponentRegistry } from '../lib/registry';

export const metadata: Metadata = {
  title: 'Interactive card',
  description: 'Interactive Card challenge by Frontend Mentor coded by Jose Cordova',
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
        <StyledComponentRegistry>
          <GlobalStyles />
          <CardProvider>
            {children}
          </CardProvider>
        </StyledComponentRegistry>
      </body>
    </html>
  )
}
