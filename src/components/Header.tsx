import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Bell, Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <header className="border-b shadow-sm text-sm">
      {/* Yuqori chiziq */}
      <div className="bg-gray-100 px-6 py-1 flex justify-between items-center text-gray-600 text-xs">
        <div className="flex gap-4">
          <a href="#">Tashkent</a>
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Contacts</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-red-600 font-semibold">+998 (91) 123-45-60</span>
          <button className="hover:underline">UZ</button>
        </div>
      </div>

      {/* Logo, Kategoriyalar, Qidiruv, Iconlar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white">
        <div className="flex items-center gap-4 w-full max-w-[75%]">
          <img
            src="/logo.svg"
            alt="Ashyo Logo"
            className="h-16 cursor-pointer"
            onClick={handleLogoClick}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            Kategoriyalar
          </button>
          <div className="flex-grow">
            <SearchBar />
          </div>
        </div>

        <div className="flex gap-4 items-center ml-4">
          <IconButton icon={<Bell size={20} />} count={1} />
          <IconButton icon={<Heart size={20} />} count={3} />
          <IconButton
            icon={<ShoppingCart size={20} />}
            count={2}
            onClick={() => navigate("/cart")}
          />
          <button
            onClick={handleLoginClick}
            className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>

      {/* Kategoriya menyusi */}
      <nav className="bg-gray-100 px-6 py-2 text-gray-700 text-sm">
        <ul className="flex flex-wrap gap-6">
          {[
            "Aksiyalar",
            "Smartfonlar",
            "Noutbuklar",
            "Konditsionerlar",
            "Televizorlar",
            "Maishiy texnika",
            "Kiyim mashinalari",
          ].map((category) => (
            <li key={category}>
              <button
                className={`hover:text-blue-600 ${
                  selectedCategory === category ? "text-blue-600 font-medium" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const IconButton = ({
  icon,
  count,
  onClick,
}: {
  icon: React.ReactNode;
  count?: number;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className="relative p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
  >
    {icon}
    {count ? (
      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {count}
      </span>
    ) : null}
  </div>
);

export default Header;
