import React from "react";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero1.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/4 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <div className=" lg:pl-44">
        <button className="hover:bg-yellow-600 text-gray bg-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
          Order Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default Home;