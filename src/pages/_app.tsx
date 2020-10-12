import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../utils/apolloClient'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default MyApp
