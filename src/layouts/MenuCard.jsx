import React, { useState } from "react";

const MenuCard = (props) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className={`w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg transition duration-300 transform hover:scale-105`}>
      <div onClick={handleClick}>
        <img className="rounded-xl" src={props.img} alt="img" />
        <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
      </div>
      {showItems && (
        <div className="space-y-4">
          {props.items.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <img src={item.image} alt={item.name} className="w-8 h-8 rounded-full" />
                <p className="font-semibold">{item.name}</p>
              </div>
              <button className="hover:bg-yellow-600 text-gray bg-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
                Add
              </button>
            </div>

          ))}
          <button className="hover:bg-yellow-600 text-gray bg-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
            See More
          </button>


        </div>
      )}
    </div>
  );
};

export default MenuCard;
