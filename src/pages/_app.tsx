import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const montserrat = Montserrat({ subsets: ['latin'] })
const theme = extendTheme({
  colors: {
    brand: {
      50: '#229171',
      100: '#5e0e8b',
      150: '#37b38f',
      500: '#229171',
    },
  },

  fonts: {
    heading: montserrat.style.fontFamily,
    body: montserrat.style.fontFamily,
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
