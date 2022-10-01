import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SiderbarDrawerProvider } from '../contexts/SideBarDrawerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // resetCSS={false}
    <ChakraProvider resetCSS theme={theme}>
      <SiderbarDrawerProvider>
        <Component {...pageProps} />

      </SiderbarDrawerProvider>

    </ChakraProvider>
  )
}

export default MyApp
