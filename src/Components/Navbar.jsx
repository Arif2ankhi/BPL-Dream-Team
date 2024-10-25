import React from 'react';
import { FaBitcoin } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center p-5 ">
            {/* <img src="https://ibb.co/HXk6Nz6" alt="" /> */}
            <img src="../assets/logo.png" alt="" />
            <div>
                
            </div>
            <ul className='flex gap-8'>
            <li><a>Home</a></li>
            <li><a>Fixtures</a></li>
            <li><a>Teams </a></li>
            <li><a>Schedules</a></li>
        

            </ul>
            <div>
                
            </div>
            
                <button className=' flex
                border-2 border-slate-400 rounded-xl px-6 py-2 m-4 bg-white gap-2'><span>0</span> Coin  <span> 
                    <img src="../../src/assets/coin.png" alt="" />
                    
                    </span></button>
        </nav>
    );
};

export default Navbar;
