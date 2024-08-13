import React from 'react';
import image1 from "../Pages/image1.jpg";

const Home = () => {
  return (
    <div className="flex justify-center items-center hover:bg-slate-200  w-full mt-32 rounded-lg">
  <div className="flex items-center w-full px-6">
  <div className="flex items-center w-2/3 ml-32">
  <img src={image1} alt="" className="w-full h-72" />
</div>

    <div className="flex flex-col justify-center   ml-10 pb-30 w-1/2 px-5">
        <div className='flex'>
              <h1 className="text-white rounded-lg  font-bold w-32 px-3 pt-3 pb-2 bg-red-400">STAFF PICK</h1>
          <h1 className=' ml-5 font-bold1 text-slate-300 font-semibold'>INDUSTRY TREND</h1>
             </div>
            <p className="font-bold text-4xl   text-sky-950 mt-2">
        4 Innovative People Are  <br /> Using QR Codes in China
      </p>
      <div className=' text-slate-500 text-2xl mt-2 font-bold1'>Learn whatsets China's QR code usageapartfrom <br></br>other countries</div>
      <div className="mt-5 text-sky-500 hover:text-blue-600  text-1xl font-bold1 font-semibold underline hove:underline">READ MORE</div>

    </div>
  </div>
</div>


  
  )
}

export default Home
