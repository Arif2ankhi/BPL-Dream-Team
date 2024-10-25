import { useEffect, useState } from "react";


const Players = () => {
// const [players, setPlayers] = useState([])
const [players, setPlayers] = useState([]);

   useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))


   } ,[])

    return (
        <div>
            
        </div>
    );
};

export default Players;