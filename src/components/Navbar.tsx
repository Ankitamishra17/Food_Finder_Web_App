import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FiChevronDown, FiSearch, FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
}

const Navbar = ({ search, setSearch }: NavbarProps) => {
  const [location, setLocation] = useState("Kanpur");
  const [openLocation, setOpenLocation] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const locationList = [
    "Kanpur",
    "Lucknow",
    "Delhi",
    "Mumbai",
    "Noida",
    "Bangalore",
    "Hyderabad",
  ];

  return (
    <>
      {/* TOP NAV */}
      <div className="w-full bg-teal-500 text-white px-4 py-4 shadow-md flex items-center justify-between sticky top-0 z-50">
        
        {/* LOGO */}
        <h1 className="text-3xl font-bold">FoodFinder</h1>

        {/* CENTER SEARCH + LOCATION (DESKTOP ONLY) */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-center">

          {/* LOCATION DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setOpenLocation(!openLocation)}
              className="flex items-center bg-white text-black px-4 py-2 rounded-lg border"
            >
              <IoLocationSharp className="text-teal-500 text-xl mr-2" />
              {location}
              <FiChevronDown className="ml-2" />
            </button>

            {openLocation && (
              <div className="absolute bg-white border rounded-lg mt-1 w-40 shadow z-50 text-black">
                {locationList.map((loc) => (
                  <div
                    key={loc}
                    onClick={() => {
                      setLocation(loc);
                      setOpenLocation(false);
                    }}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SEARCH BAR */}
          <div className="flex items-center bg-white rounded-lg overflow-hidden px-3 py-2 border w-96">
            <FiSearch className="text-teal-500 text-xl" />
            <input
              type="text"
              placeholder="Search for a restaurants, cuisine or a dish"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1 w-full text-black outline-none bg-transparent"
            />
          </div>
        </div>

        {/* DESKTOP LOGIN BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-teal-500 transition">
            Login
          </button>

          <button className="px-4 py-2 rounded-md bg-white text-teal-600 font-semibold hover:bg-gray-100 transition">
            Sign Up
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-3">
          <button className="w-full py-2 text-left border-b">Login</button>
          <button className="w-full py-2 text-left border-b">Sign Up</button>
        </div>
      )}

      {/* MOBILE SEARCH + LOCATION */}
      <div className="md:hidden p-4 space-y-3 bg-white shadow">

        {/* LOCATION */}
        <div className="relative">
          <button
            onClick={() => setOpenLocation(!openLocation)}
            className="flex items-center justify-between w-full bg-gray-100 px-4 py-2 rounded-lg border"
          >
            <span className="flex items-center gap-2 text-black">
              <IoLocationSharp className="text-teal-500 text-xl" />
              {location}
            </span>
            <FiChevronDown />
          </button>

          {openLocation && (
            <div className="absolute w-full bg-white border rounded-lg mt-1 z-50 shadow">
              {locationList.map((loc) => (
                <div
                  key={loc}
                  onClick={() => {
                    setLocation(loc);
                    setOpenLocation(false);
                  }}
                  className="px-3 py-2 hover:bg-gray-100 "
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SEARCH */}
        <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden px-3 py-2 border">
          <FiSearch className="text-teal-500 text-xl" />
          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 w-full text-black outline-none bg-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
