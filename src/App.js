import React from 'react'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import BestSelling from './components/BestSelling'
import Products from './components/Products'
import Offers from './components/Offers'
import Designers from './components/Designers'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <Home />
      <BestSelling />
      <Products />
      <Offers />
      <Designers />
      <Feedback />
      <Footer />
    </>
  )
}

export default App