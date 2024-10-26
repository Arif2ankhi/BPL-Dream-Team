

const Banner = ({handleClaimCoin}) => {
    return (
    <header className="w-9/12 mx-auto">
        <div
         className='bg-no-repeat bg-cover rounded-2xl bg-black' style={{
         backgroundImage: 'url(https://i.ibb.co/k5Tzvrb/bg-shadow.png)'
        //  backgroundImage: 'url(https://md-arif-hossin.imgbb.com/)'
        }}
        >
            <div className="flex flex-col items-center">
            <img className="w-3/12" src="../../assets/banner-main.png" alt="" />

            <h1 className="text-2xl font-bold text-black mt-2">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="font-bold text-xl text-gray-400 mt-2">Beyond Boundaries Beyond Limits</p>
           
            <button className="ring-2 ring-yellow-400 ring-offset-4 ring-offset-yellow-500
             dark:ring-offset-black bg-yellow-500 font-bold rounded-xl p-2 mt-4 mb-8" onClick= {handleClaimCoin}>
            Claim Free Credit
</button>

            </div>
      

            
        </div>

    </header>
        
    )
};

export default Banner;


