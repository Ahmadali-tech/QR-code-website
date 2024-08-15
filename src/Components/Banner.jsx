import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="bg-blue-500 pb-14 pt-8">
      <div className="text-white bg-fixed">
        <h1 className="font-bold  lg:ml-24 ml-7 mt-5 text-4xl lg:text-5xl">Blog</h1>
      </div>
      <div className="mt-3 mb-1 mx-5 lg:mx-32 text-lg lg:text-xl bg-blue-600 w-full lg:w-[80%] pb-4 lg:pb-2 flex flex-col lg:flex-row rounded-lg">
        <div className="p-5 lg:p-0 lg:ml-5 lg:mt-5">
          <h1 className="text-slate-100 font-medium font-bold mt-3">
            Level up your QR Code knowledge with the latest tips and  <br></br>news.
          </h1>
        </div>
        <div className="mt-5 lg:mt-7 flex flex-col lg:flex-row gap-4 lg:gap-10  ml-5 lg:ml-28">
          <ul className="text-white font-bold text-sm lg:text-1xl">
            <Link to="/">BEST PRACTICES <br /> PRODUCT</Link>
          </ul>
          <ul className="text-white font-bold text-sm lg:text-1xl">
            <Link to="/">Covid-19</Link>
          </ul>
          <ul className="text-white font-bold text-sm lg:text-1xl">
            <Link to="/">INDUSTRY TRENDS</Link>
          </ul>
          <ul className="text-white font-bold text-sm lg:text-1xl">
            <Link to="/">PARTNERS</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;

