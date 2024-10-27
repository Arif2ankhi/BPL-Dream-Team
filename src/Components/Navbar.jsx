

const Navbar = ({coin}) => {
    return (
        <nav className="w-9/12  flex mx-auto justify-between items-center p-5 sticky top-0">
            <div>
            <img src="../assets/logo.png" alt="" />
                
            </div>
            <ul className='flex items-center gap-8'>
            <li><a>Home</a></li>
            <li><a>Fixtures</a></li>
            <li><a>Teams </a></li>
            <li><a>Schedules</a></li>
            <p className='border border-solid flex border-slate-400
             rounded-md p-1 font-semibold text-cyan-700 text-base'>
            {coin} Coins <img width="24" height="24 P-2" 
            src="https://img.icons8.com/emoji/48/coin-emoji.png" alt="coin-emoji"/></p>

            </ul>
              

        </nav> 
        
    );
};

export default Navbar;
