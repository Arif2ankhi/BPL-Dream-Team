import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner/Banner'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'
import Selected from './Components/Selected/Selected'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Subscribe from './Components/Subscribe/Subscribe'





function App() {

  const [coin, setCoin] = useState(0)
  const  [toggle, setToggle] = useState('available')
  const [selectedPlayers, setSelectedPlayers] =useState([])
  


  const viewToggle =(toggleView) => {
    if(toggleView === 'available' && selectedPlayers.length === 0){
      window.location.reload()
       }else {
        setToggle(toggleView)
       }

  };

  const handleClaimCoin = () =>{

    setCoin((previousCoin) => previousCoin + 1000000)
    toast.success('Coins added successfully',{
      position:'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick:true,
      theme: 'colored',
    })
  };


  // Add a player
  const handleSelectPlayer =(player) => {
    // error message
    if(coin === 0){
      toast.error('You do not have enough balance.Please claim it first',{
        position:'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick:true,
          
      });

    }else if (selectedPlayers.some(p=> p.id === player.id)){
      toast.info(`You already bought  ${player.name}`,{
        position:'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick:true,

      });
    
  

    } else if(selectedPlayers.length <6 )
      if(coin >= player.price) {
      setCoin((prevCoin) => prevCoin -player.price);
      setSelectedPlayers((prevSelected) => [...prevSelected, player])
      toast.success(`Congratulations! You bought ${player.name} for ${player.price} coins`,{
      position:"top-right",
      autoClose: 2000,

      });
    }
  };

  // Remove a player 
  const handleRemovePlayer = (player) =>{

    setCoin((prevCoin) => prevCoin + player.price);
    setSelectedPlayers((prevSelected) => prevSelected.filter((p)=> p.id !== player.id ))
    toast.info(`Removed ${player.name}. ${player.price} coins refunded.`,{
      position:'top-center',
      autoClose: 2000,
      theme: 'colored',

    });
  };


  return (
    <>

   <Navbar coin={coin}></Navbar>
  
    <Banner handleClaimCoin ={handleClaimCoin}></Banner>

    <div className='w-9/12 mx-auto mt-3'>
       <div className="flex justify-end ">
             <button className="py-3 bg-[#dbe678]  border rounded-l px-3 font-bold" onClick={()=>viewToggle('available')}>Available</button>
             <button className=" border rounded-r p-3 font-bold" onClick={()=>viewToggle('selected')}>Selected ({selectedPlayers.length})</button>
            </div>
    </div>

    {toggle === 'available' ? (
    <Players handleSelectPlayer={handleSelectPlayer} />
    ) : (<Selected
    playersSelected={selectedPlayers}
    playerRemoved={handleRemovePlayer}
    viewToggle={viewToggle}
    />
    )}

  <ToastContainer></ToastContainer>
  
 
  <Subscribe/>
  <Footer></Footer>
  
    </>
  )
};

export default App




