import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner/Banner'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'

// import { useState } from 'react'



function App() {

  const [credit, setCredit] = useState(0)
  // const [coin, setCoin] = useState(0);
  // const [selectedPlayers, setSelectedPlayers] = useState([]);
  // const [view, setView] = useState('available')

  const handleCreditClaim = () =>{
    setCredit(previousCredit => {
      const newCredit = previousCredit + 700000;
      return newCredit

    })
  
  }

  return (
    <>
  
   <Navbar credit={credit}></Navbar>
  
  <Banner handleCreditClaim={handleCreditClaim}></Banner>
  
  <Players></Players>

  <Footer></Footer>
  

   
      
    </>
  )
}


export default App
