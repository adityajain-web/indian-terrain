import React from 'react'
import Router from './router/index'
import { Header, Footer } from './components/components'

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App