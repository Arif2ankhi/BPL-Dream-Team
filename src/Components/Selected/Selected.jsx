import Player from "../Player/Player";

const Selected = ({playersSelected, playerRemoved, viewToggle}) => {

    const handleRemovePlayer =(player) => {
        playerRemoved(player);

        if(playersSelected.length === 1){
            window.location.reload();
        }
    }  

    return (
        <div className="w-9/12 mx-auto mt-3 rounded-lg p-3">
            <h3 className="text-1xl font-bold">
                Selected Players <span>({playersSelected.length}/6)</span>
            </h3>
            {playersSelected.length > 0 ? (
                <div>
                    {playersSelected.map((player, idx) => (
                        <div key={idx} className="flex justify-between items-center border rounded-lg bg-cyan-100
                         py-3 px-4 mb-3">
                            <div className="flex items-center gap-3">
                                {/* <img className="w-20 h-20 rounded-full" src={player.image} alt={player.name}/> */}
                                <img className="w-20 h-20 rounded-full" src={player.cover} alt={player.name}/>
                                <div>
                                    <p className="text-xl font-bold">{player.name}</p>
                                    <p className="text-md font-semibold">Price: ${player.price}</p>
                                     <p className="text-md font-semibold text-gray-600">{player.specialty}</p>
                                </div>
                            </div>
                            <button onClick={()=>playerRemoved(player)} className="btn-delete">
                            <img src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete" />
                            </button>
                        </div>
                    ))}
                    <button onClick={()=>viewToggle('available')} 
                        // className="py-2 mt-4 bg-['dbe678] border rounded-2xl font-bold bg-green-500 rounded 2xl p-4 text-black"> Add More Player </button>
                        className="py-2 mt-4 ring-2 ring-green-400 ring-offset-4 ring-offset-green-500
             dark:ring-offset-white bg-green-500 rounded 3xl p-4 text-black font-bold"> Add More Player </button>
                </div>
            ) : (
                <p className="text-cyan-600 font-bold">No Players selected yet.</p>
                )}
        </div>
    );
};

export default Selected;
