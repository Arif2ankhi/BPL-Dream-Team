import { useEffect, useState } from "react";
import '../Player/Player';
import Player from "../Player/Player";


const Players = ({}) => {
// const [players, setPlayers] = useState([])
const [players, setPlayers] = useState([]);

   useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))


   } ,[])

    return (
        <div className="mt-4 w-9/12 mx-auto">
            <div className="flex justify-between items-center ">
                <h3 className="text-2xl font-bold">Available Players : {players.length}</h3>
                <div className="flex border rounded-lg">
                <a className="py-3 bg-[#dbe678] rounded-1 px-3 font-bold" href="">Available</a>
                <a className="rounded-r p-3 font-bold" href="">Selected (0)</a>
            </div>           
        </div>

        <div className="player-section mt-6">
        {
            // players.map(player => <Player key={player.id} player={player}
            //     handleSelectPlayer={handleSelectPlayer}
            //     >
            //     </Player>)
            players.map(player =><Player key={player.id} player={player}
                // handleSelectPlayer={handleSelectPlayer}
            >

            </Player>)
        }
        </div>
        
        </div>
    );
};

// Players.propTypes ={
//     players.PropTypes.object.isRequied
    
//     }

export default Players;