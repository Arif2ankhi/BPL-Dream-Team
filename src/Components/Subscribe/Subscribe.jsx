import React from 'react'

export default function Subscribe() {
  return (
    <div className='relative mb-[40px] ml-[500px]  '>
            <div className=" w-8/12 absolute top-[80px] rounded-lg p-4 bg-gradient-to-r from-blue-200 via-white to-orange-200 text-center 
            ring-2 ring-white ring-offset-4 ring-offset-gray-200
             dark:ring-offset-gray bg-gray-200
            ">
            
                <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
                <p className="text-gray-500 mb-6 font-bold">Get the latest updates and news right in your inbox!</p>
                
                <form className="flex justify-center items-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full max-w-md p-3 border border-gray-400 rounded-lg"
                    />
                    <button className="bg-gradient-to-r from-purple-400 to-orange-300 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
                        Subscribe
                    </button>
                </form>
            </div>
        
        </div>
  )
}
