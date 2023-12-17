import type { Metadata } from 'next'
import localFont from 'next/font/local'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import LocomotiveProvider from "@/providers/LocomotiveScrollProvider"

export const metadata: Metadata = {
  title: 'Space Emotions',
  description: '',
}

const HelveticaNeue = localFont({
  src: [
    {
      path: './fonts/HelveticaNeue-MediumCond.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/HelveticaNeue-MediumCondObl.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/HelveticaNeue-BlackCondObl.woff',
      weight: '900',
      style: 'italic'
    },
    {
      path: './fonts/HelveticaNeue-CondensedBold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/HelveticaNeue-BlackCond.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeue-ThinCond.woff',
      weight: '100',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-helvetica-neue',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={HelveticaNeue.className}>
        <StyledComponentsRegistry>
          <LocomotiveProvider>
            <GlobalStyles />
            {children}
          </LocomotiveProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
