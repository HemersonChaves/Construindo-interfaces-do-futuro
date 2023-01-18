import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SiderbarDrawerProvider } from '../contexts/SideBarDrawerContext';
import { makeServer } from '../services/mirage';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  // const [queryClient] = useState(() => new QueryClient())
  return (
    // resetCSS={false}
    <QueryClientProvider client={queryClient} >
      <ChakraProvider resetCSS theme={theme}>
        <SiderbarDrawerProvider>
          <Component {...pageProps} />
        </SiderbarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools  />
    </QueryClientProvider>
  )
}

export default MyApp
