// import PropTypes from 'prop-types';
import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner/Banner'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'
// import { useState } from 'react'



function App() {


  // const [credit, setCredit] = useState(0);
  // const [selectedPlayers, setSelectedPlayers] = useState([]);
  // const [view, setView] = useState('avalable')
 

  return (
    <>
  
    <Navbar></Navbar>
  
  <Banner></Banner>
  
  <Players></Players>

  <Footer></Footer>
  

   
      
    </>
  )
}


export default App
