import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.scss'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import LandingPage from './app/core/components/landing-page/LandingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProvider attribute='class' defaultTheme='modern' themes={['light', 'dark', 'modern']}>
        <LandingPage />
      </ThemeProvider>
    </NextUIProvider>
  </StrictMode>,
)
