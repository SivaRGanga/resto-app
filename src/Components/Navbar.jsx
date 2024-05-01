import React, { useState } from 'react';
import { IoMdRestaurant } from "react-icons/io";
import { Link } from 'react-scroll';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header className="fixed w-full bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-4 px-8">
                <div className="flex items-center">
                    <IoMdRestaurant size={50} className="text-yellow-600" />
                    <h1 style={{fontSize:'2rem'}} className="ml-3 text-xl font-semibold text-gray-800">Flavors Eatery</h1>
                </div>
                <div className="md:flex hidden items-center space-x-8">
                    <NavLink to="home">Home</NavLink>
                    <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <NavLink to="dishes">Dishes</NavLink>
                        {showDropdown && (
                            <div className="absolute top-full left-0 w-48 py-2 bg-white border border-gray-200 rounded shadow-lg">
                                <DropdownLink to="spicy">Spicy</DropdownLink>
                                <DropdownLink to="tasty">Tasty</DropdownLink>
                                <DropdownLink to="delicious">Delicious</DropdownLink>
                                <DropdownLink to="crispy">Crispy</DropdownLink>
                            </div>
                        )}
                    </div>
                    <NavLink to="menu">Menu</NavLink>
                    <NavLink to="reviews">Reviews</NavLink>
                    <NavLink to="about">About</NavLink>
                </div>
            </nav>
        </header>
    );
}

const NavLink = ({ to, children }) => (
    <Link
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        className="text-gray-800 hover:text-yellow-600 transition-all cursor-pointer"
    >
        {children}
    </Link>
);

const DropdownLink = ({ to, children }) => (
    <Link
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        className="block px-4 py-2 text-gray-800 hover:text-yellow-600 transition-all cursor-pointer"
    >
        {children}
    </Link>
);

export default Navbar;
