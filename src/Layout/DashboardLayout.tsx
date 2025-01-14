import Home from "@/pages/Home";
import logo from "../assets/resume-icon.jpg";
import { Moon, Sun, X, Menu } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const buttonStyle = "h-4 pl-2";

  const toggleDarkMode = () => {
    const element = document.getElementById("toggle");
    if (element) {
      element.classList.toggle("dark");
    }
    setDarkMode(!darkMode);
  };

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="toggle" className="h-screen w-screen dark:bg-gray-900">
      <div
        className={`flex justify-between items-center h-14 bg-gray-100 dark:bg-black px-6 py-2.5 fixed left-0 top-0 w-full text-black`}
      >
        <img src={logo} className="h-9 cursor-pointer" />
        <div className="hidden md:flex md:gap-4 md:items-center md:text-center md:text-sm md:pr-4 md:cursor-pointer text-black dark:text-white">
          <h1 className="hover:text-blue-700">Home</h1>
          <h1 className="hover:text-blue-700">About</h1>
          {darkMode ? (
            <Sun onClick={toggleDarkMode} className={`${buttonStyle}`} />
          ) : (
            <Moon onClick={toggleDarkMode} className={`${buttonStyle}`} />
          )}
        </div>
        <div className="md:hidden flex items-center gap-4">
          {darkMode ? (
            <Sun onClick={toggleDarkMode} className={`${buttonStyle} dark:text-white`} />
          ) : (
            <Moon onClick={toggleDarkMode} className={`${buttonStyle}`} />
          )}
        

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" onClick={toggleHamburger}>
              <div className="transition-transform duration-300 ease-in-out dark:text-white">
                {!isOpen ? <Menu /> : <X />}
              </div>
            </Button>
          </PopoverTrigger>
          {isOpen && (
            <PopoverContent className=" md:hidden absolute top-full  right-0 w-80 p-2 bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="md:hidden dark:text-white dark:bg-gary-900">
                <h1 className="hover:text-blue-700 p-2 ">Home</h1>
                <h1 className="hover:text-blue-700 p-2 ">About</h1>
              </div>
            </PopoverContent>
          )}
        </Popover>
        </div>
      </div>
      <div className={`${isOpen ? "pt-28 md:pt-14 dark:bg-gray-900" : "pt-14 "}`}>
        <Home />
      </div>
    </div>
  );
};
