import Home from "@/pages/Home";
import logo from "../assets/resume-icon.jpg";
import { Moon, Sun, X, Menu } from "lucide-react";
import { useState } from "react";

export const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const buttonStyle = "h-4 pl-2";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={`flex justify-between items-center h-14 bg-gray-100 px-6 py-2.5 fixed left-0 top-0 w-full`}>
        <img src={logo} className="h-9 cursor-pointer" />
        <div className="hidden md:flex md:gap-4 md:items-center md:text-center md:text-sm md:pr-4 md:cursor-pointer">
          <h1 className="hover:text-blue-700">Home</h1>
          <h1 className="hover:text-blue-700">About</h1>
          {darkMode ? (
            <Sun onClick={toggleDarkMode} className={`${buttonStyle}`} />
          ) : (
            <Moon onClick={toggleDarkMode} className={`${buttonStyle}`} />
          )}
        </div>
        <div className="md:hidden">
          {darkMode ? (
            <Sun onClick={toggleDarkMode} className={`${buttonStyle}`} />
          ) : (
            <Moon onClick={toggleDarkMode} className={`${buttonStyle}`} />
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleHamburger}>
            <div className="transition-transform duration-300 ease-in-out ">{!isOpen ? <Menu /> : <X />}</div>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full p-2 bg-gray-100 transition-all duration-300 ease-in-out">
              <h1 className="hover:text-blue-700">Home</h1>
              <h1 className="hover:text-blue-700">About</h1>
            </div>
          )}
        </div>
        </div>
        <div className={`${isOpen ? 'mt-32' : 'mt-14'}`}>
    <Home />
  </div>
       
      </div>
    
  );
};
