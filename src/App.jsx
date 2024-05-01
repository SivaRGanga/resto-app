import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Menu from './Components/Menu'
import Review from './Components/Review'
import Footer from './Components/Footer'






function App() {
  return (
    <div>
  
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>




        <div id="menu">
          <Menu />
        </div>
        <div id="dishes">
          <Dishes />
        </div>

        <div id="reviews">
          <Review />
        </div>

      </main>

      <Footer />
    </div>
  
    </div>
   
  )
}

export default App