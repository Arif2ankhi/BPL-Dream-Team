
import './Player.css'
const Player = ({player, handleSelectPlayer}) => {
    // console.log(player);
    const {id, name, country, specialty, rating, price, cover } = player;
    return (
            <div>
                {/* image */}
                <div className='player-card border rounded-lg p-3 space-y-5'>
                <img className='player-image rounded-lg' src={cover} alt=""/>
                {/* name */}
                <div className='flex gap-2 mt-2 items-center'>
                    {/* <img id='name-logo' src="/src/assets/playerlogo.jpg" alt=""/> */}
                    <img id='name-logo' src="https://i.ibb.co/pXP4jnd/playerlogo.jpg" alt=""/>
                    <h1 className='player-name'>{name}</h1>
                </div>
                {/* nationality and role */}
                <div className='flex justify-between items-center space-x-4 mt-2'>
                    <div className='flex gap-2 player-country items-center '>
                    <p> <i className="fa-solid fa-flag"></i>{country}</p>
                    </div>
                    <button className='role rounded bg-[#f3f3f3]'>{specialty}</button>
                </div>
                {/* hr */}
                <hr className='mt-2 mb-2'/>
                {/* rating */}
                <p className='p-size'>Rating : {rating}</p>
                {/* price */}



                <div className='flex justify-between'>
                    <p className='price'>Price : ${price}</p>
                    <button className='role btn-select rounded'
                    onClick={()=>handleSelectPlayer(player)}>Choose Player</button>
                </div>


            </div>
            </div>
        );
};

export default Player;
