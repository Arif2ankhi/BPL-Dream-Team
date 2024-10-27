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
  // can be delete later
  // const viewToggle = (toggle) => {
  //   setToggle(toggle);
  // }

          // coin added main function 
          
  // const handleClaimCoin = () =>{
  //   setCoin(previousCoin => {
  //     const newCoin = previousCoin + 700000;
  //     // toast.success('coins added successfully');
  //     return newCoin;

  //   })

  const handleClaimCoin = () =>{

    setCoin((previousCoin) => previousCoin + 700000)
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
    if(selectedPlayers.length <6 && !selectedPlayers.some(p => p.id ===player.id)) {
      setSelectedPlayers((prevSelected) => [...prevSelected, player])
      toast.success(`Congratulation! You bought ${player.name}`,{
        position:"top-right",
        autoClose: 2500,

      })
    }
  }

  // Remove a player 
  const handleRemovePlayer = (player) =>{
    setSelectedPlayers((prevSelected) => prevSelected.filter((p)=> p.id !== player.id ))
  }


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
  
 

  <Footer></Footer>
      
    </>
  )
}

export default App




