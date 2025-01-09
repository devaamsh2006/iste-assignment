import React from 'react'
import Header from './components/Header'
import Display from './components/Display'
import Features from './components/Features'
import Products from './components/Products'
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <div className='box-border bg-gray-100'>
      <Header />
      <Display />
      <Features />
      <Products />
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App