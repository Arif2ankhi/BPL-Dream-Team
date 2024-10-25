

const Banner = () => {
    return (
        <div
         className= 'w-9/12 mx-auto bg-cover bg-no-repeat rounded-2xl md:w-full h-full md:h-[32rem mb-10' style={{
        backgroundImage: 'url(https://i.ibb.co/k5Tzvrb/bg-shadow.png)'
        }}
       > 
       <div className="mx-auto items-center text-center">
        <img src="../../assets/banner-main.png" alt="" />
        <h1 className="text-4xl font-bold text-black mt-2">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="font-bold text-xl text-gray-400">Beyond Boundaries Beyond Limits</p>
        {/* <button className="ring-2 ring-yellow-400 ring-offset-4 ring-offset-yellow-500
         dark:ring-offset-yellow-900 bg-yellow-500 font-bold rounded-xl p-2 mt-2">
        Claim Free Credit
        </button> */}
        <button className="ring-2 ring-yellow-400 ring-offset-4 ring-offset-yellow-500
         dark:ring-offset-black bg-yellow-500 font-bold rounded-xl p-2 mt-2">
        Claim Free Credit
        </button>

        

       </div>

            
        </div>
    );
};

export default Banner;