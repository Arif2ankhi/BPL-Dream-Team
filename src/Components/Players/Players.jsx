import { useEffect, useState } from "react";
// import '../Player/Player';
import Player from "../Player/Player";


const Players = ({handleSelectPlayer}) => {
// const [players, setPlayers] = useState([])
const [players, setPlayers] = useState([]);

   useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))


   } ,[])

    return (
        <div className="mt-4 w-9/12 mx-auto">
            <div className="flex justify-start items-center ">
                {/* <h3 className="text-2xl font-bold">Available Players : {players.length}</h3> */}
                <h3 className="text-2xl font-bold">Available Players</h3>
                
                           
        </div>

        <div className="player-section mt-6">
        {
            players.map((player) =>(
            <Player key={player.id} player={player}
                handleSelectPlayer={handleSelectPlayer}
            />

            ))}
        </div>
        </div>
        
    
    );
};


export default Players;



