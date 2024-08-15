import React from 'react';
import image1 from "../Pages/image1.jpg";
import HomeFolder from './HomeFolder';

const Home = () => {
  return (
    <div>
    
    <div className="flex justify-center items-center hover:bg-slate-100 w-full mt-16 lg:mt-32 rounded-lg">
      <div className="flex flex-col lg:flex-row items-center w-full px-4 lg:px-6">
        <div className="flex items-center w-full lg:w-2/3 lg:ml-32">
          <img src={image1} alt="" className="w-full h-48 sm:h-72" />
        </div>
         <div className="flex flex-col justify-center mt-5 lg:mt-0 lg:ml-10 lg:pb-30 w-full lg:w-1/2 px-5">
          <div className='flex'>
            <h1 className="text-white rounded-lg font-bold w-32 px-3 pt-3 pb-2 bg-red-400">STAFF PICK</h1>
            <h1 className='ml-5 text-slate-300 font-semibold'>INDUSTRY TREND</h1>
          </div>
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl text-sky-950 mt-2">
            4 Innovative People Are <br /> Using QR Codes in China
          </p>
          <div className='text-slate-500 text-lg sm:text-xl lg:text-2xl mt-2'>
          Learn what sets China's QRcode usage apartfrom <br /> other countries
          </div>
          <div className="mt-5 text-sky-500 hover:text-blue-600 text-sm sm:text-base lg:text-xl font-semibold underline">
            READ MORE
          </div>
        </div>
      </div>
    </div>
    <HomeFolder/>
    </div>
   
  );
}

export default Home;

