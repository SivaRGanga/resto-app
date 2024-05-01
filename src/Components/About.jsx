import React from "react";
import img from "../assets/img/about1.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 bg-gray-100">
    <img  src={img} alt="img" className="rounded-image lg:mr-10 mb-10 lg:mb-0 w-full lg:w-1/2" />

    <div className="lg:ml-10 lg:w-1/2">
      <h1 className="font-semibold text-4xl text-center md:text-left text-gray-800 hover:text-yellow-600">
        Why Choose Us?
      </h1>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        architecto quisquam delectus minima perferendis nulla quia nisi
        laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
        molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
        laboriosam temporibus delectus, aut a? Quasi?
      </p>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
        suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
        veritatis facere. Magnam!
      </p>
      <div className="flex justify-center lg:justify-start mt-6">
        <button className="bg-white-500 hover:bg-yellow-600 text-gray py-2 px-6 rounded-full shadow-lg transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
  );
};

export default About;