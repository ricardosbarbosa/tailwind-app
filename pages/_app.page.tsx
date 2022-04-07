import '../styles/globals.css'

import { QueryClientProvider } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryErrorResetBoundary } from 'react-query'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../utils/apollo'
import queryClient from '../utils/react-query'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              There was an error!
              <button onClick={() => resetErrorBoundary()}>Try again</button>
            </div>
          )}
        >
          <ApolloProvider client={apolloClient}>
            <QueryClientProvider client={queryClient}>
              {getLayout(<Component {...pageProps} />)}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </ApolloProvider>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default MyApp
