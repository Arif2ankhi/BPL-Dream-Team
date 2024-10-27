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
                        <div key={idx} className="flex justify-between items-center border rounded-lg bg-gray-100
                         py-3 px-4 mb-3">
                            <div className="flex items-center gap-3">
                                {/* <img className="w-20 h-20 rounded-full" src={player.image} alt={player.name}/> */}
                                <img className="w-20 h-20 rounded-full" src={player.cover} alt={player.name}/>
                                <div>
                                    <p className="text-xl font-bold">{player.name}</p>
                                    <p className="text-sm text-gray-600">{player.specialty}</p>
                                </div>
                            </div>
                            <button onClick={()=>playerRemoved(player)} className="btn-delete">
                            <img src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete" />
                                {/* <img src="/src/assets/images/delete.png" alt="" /> */}
                            </button>
                        </div>
                    ))}
                    <button onClick={()=>viewToggle('available')} 
                        className="py-2 mt-4 bg-['dbe678] border round font-bold bg-green-500 rounded 2xl p-4 text-black"> Add More</button>
                </div>
            ) : (
                <p className="text-cyan-600 font-bold">No Players selected yet.</p>
                )}
        </div>
    );
};

export default Selected;
