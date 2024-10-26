

const Navbar = () => {
    return (
        <nav className="w-9/12  flex mx-auto justify-between items-center p-5 ">
            {/* <img src="https://ibb.co/HXk6Nz6" alt="" />
            <img src="../assets/logo.png" alt="" /> */}
            <div>
            <img src="../assets/logo.png" alt="" />
                
            </div>
            <ul className='flex items-center gap-8'>
            <li><a>Home</a></li>
            <li><a>Fixtures</a></li>
            <li><a>Teams </a></li>
            <li><a>Schedules</a></li>
            {/* <li className='border border-solid flex border-slate-400 rounded-md p-1 font-semibold text-black text-base'>{coin} coins <img width="20" height="20" src="https://img.icons8.com/emoji/48/coin-emoji.png" alt="coin-emoji"/></li> */}

            <li className='border border-solid flex border-slate-400 rounded-md p-2 font-semibold text-black text-base'> Coins <img width="20" height="20" src="https://img.icons8.com/emoji/48/coin-emoji.png" alt="coin-emoji"/></li>
            
        

            </ul>
                {/* <button className=' flex
                border-2 border-slate-400 rounded-xl px-6 py-2 m-4 bg-white gap-2'><span>0</span> Coin <span> 
                <img src="../../src/assets/coin.png" alt="" />
                </span></button> */}


        </nav> 
    );
};

export default Navbar;
