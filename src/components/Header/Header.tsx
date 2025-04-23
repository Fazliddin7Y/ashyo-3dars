import React from 'react';
import { FaSearch, FaBalanceScale, FaHeart, FaShoppingBag, FaBoxOpen, FaMapMarkerAlt, FaChevronDown,
} from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="font-sans w-full">
      {/* Top Navbar */}
      <div className="bg-gray-100 text-sm px-10 py-2 flex justify-between items-center">
        <div className="flex items-center text-gray-600 gap-1">
          <FaMapMarkerAlt />
          <span>Tashkent</span>
        </div>
        <nav className="flex gap-6 text-gray-600">
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Contacts</a>
        </nav>
        <div className="flex items-center gap-4 text-gray-600">
          <span>+998 (71) 123-45-67</span>
          <select className="bg-transparent outline-none cursor-pointer">
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
          </select>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-blue-700 text-3xl font-bold gap-2">
          <img src="./logo.svg" alt="Ashyo logo" className="w-12 h-12" />
          <span>Ashyo</span>
        </div>

        {/* Search */}
        <div className="flex flex-grow max-w-2xl mx-10">
          <button className="bg-blue-700 text-white px-4 py-2 rounded-l-md flex items-center gap-2">
            Kategoriya <FaChevronDown className="text-xs" />
          </button>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-grow px-4 py-2 bg-gray-100 outline-none"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <div className="relative bg-gray-100 p-2 rounded-md">
            <FaBalanceScale className="text-xl" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white px-1 rounded-full">2</span>
          </div>
          <div className="relative bg-gray-100 p-2 rounded-md">
            <FaHeart className="text-xl" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white px-1 rounded-full">11</span>
          </div>
          <div className="relative bg-gray-100 p-2 rounded-md">
            <FaShoppingBag className="text-xl" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white px-1 rounded-full">7</span>
          </div>
          <div className="bg-gray-100 p-2 rounded-md">
            <FaBoxOpen className="text-xl" />
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className="bg-white flex justify-center gap-6 text-gray-700 text-sm py-3 border-t">
        <a href="#">Noutbuklar</a>
        <a href="#">Konditsionerlar</a>
        <a href="#">Macbook M2 Pro</a>
        <a href="#">Smartfonlar</a>
        <a href="#">Muzlatkichlar</a>
        <a href="#">Kir yuvish mashinalari</a>
        <a href="#">Televizorlar</a>
        <a href="#">Lenovo</a>
        <a href="#">Chang yutkichlar</a>
      </nav>
    </header>
  );
};

export default Header;
