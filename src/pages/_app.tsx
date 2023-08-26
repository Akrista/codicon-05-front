import type { AppProps } from 'next/app'
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'


const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        `}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
