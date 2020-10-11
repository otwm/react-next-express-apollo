import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../utils/apolloClient'

console.log(process.env.MY_TEST, process.env.NEXT_PUBLIC_ENV_VARIABLE)

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    console.log(process.env.MY_TEST, process.env.NEXT_PUBLIC_ENV_VARIABLE)
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default MyApp
