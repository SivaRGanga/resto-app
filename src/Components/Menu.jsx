import React from "react";
import MenuCard from "../layouts/MenuCard";
import menu1 from "../assets/img/menu11.png";
import menu2 from "../assets/img/menu22.png";
import menu3 from "../assets/img/menu33.png";
import menu4 from "../assets/img/menuu.png";
import menu5 from "../assets/img/menus.png";
import menu6 from "../assets/img/menu6.png";
import bruschettaImage from "../assets/img/menu11.png";
import spinachArtichokeDipImage from "../assets/img/menuu.png";
import capreseSaladImage from "../assets/img/menu2.jpg";
import spaghettiCarbonaraImage from "../assets/img/menu3.jpg";
import chickenParmesanImage from "../assets/img/menu4.jpg";
import vegetableStirFryImage from "../assets/img/menu5.png";
import chocolateLavaCakeImage from "../assets/img/menu6.png";
import tiramisuImage from "../assets/img/menus.png";
import fruitTartImage from "../assets/img/menu22.png";
import mojitoImage from "../assets/img/menu11.png";
import greenTeaImage from "../assets/img/menu44.png";
import berrySmoothieImage from "../assets/img/menuu.png";
import chickenNoodleSoupImage from "../assets/img/menus.png";
import beefChiliImage from "../assets/img/menu11.png";
import vegetableMinestroneImage from "../assets/img/menu11.png";
import grilledCheeseSandwichImage from "../assets/img/menu11.png";
import cheeseQuesadillaImage from "../assets/img/menu11.png";
import macaroniAndCheeseImage from "../assets/img/menu11.png";

const Menu = () => {
  const appetizers = [
    { name: "Bruschetta", image: bruschettaImage },
    { name: "Spinach Artichoke Dip", image: spinachArtichokeDipImage },
    { name: "Caprese Salad", image: capreseSaladImage },
  ];
  const mainCourses = [
    { name: "Spaghetti Carbonara", image: spaghettiCarbonaraImage },
    { name: "Chicken Parmesan", image: chickenParmesanImage },
    { name: "Vegetable Stir-Fry", image: vegetableStirFryImage },
  ];
  const desserts = [
    { name: "Chocolate Lava Cake", image: chocolateLavaCakeImage },
    { name: "Tiramisu", image: tiramisuImage },
    { name: "Fruit Tart", image: fruitTartImage },
  ];
  const beverages = [
    { name: "Mojito", image: mojitoImage },
    { name: "Green Tea", image: greenTeaImage },
    { name: "Berry Smoothie", image: berrySmoothieImage },
  ];
  const soupsAndStews = [
    { name: "Chicken Noodle Soup", image: chickenNoodleSoupImage },
    { name: "Beef Chili", image: beefChiliImage },
    { name: "Vegetable Minestrone", image: vegetableMinestroneImage },
  ];
  const kidsMenu = [
    { name: "Grilled Cheese Sandwich", image: grilledCheeseSandwichImage },
    { name: "Cheese Quesadilla", image: cheeseQuesadillaImage },
    { name: "Macaroni and Cheese", image: macaroniAndCheeseImage },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10 hover:text-yellow-600">
        Premium Menu
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <MenuCard img={menu1} title="Appetizers" items={appetizers} />
        <MenuCard img={menu2} title="Main courses" items={mainCourses} />
        <MenuCard img={menu3} title="Desserts" items={desserts} />
        <MenuCard img={menu4} title="Beverages" items={beverages} />
        <MenuCard img={menu5} title="Soups & Stews" items={soupsAndStews} />
        <MenuCard img={menu6} title="Kids Menu" items={kidsMenu} />
      </div>
    </div>
  );
};

export default Menu;
