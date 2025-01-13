import logo from "../assets/resume-icon.jpg";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const buttonStyle = "h-4 pl-2";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {/* header-section */}
      <div className="flex justify-between h-14 bg-gray-100  p-2.5">
        <img src={logo} className="h-9 cursor-pointer" />
        <div className="flex gap-4 text-center text-sm pt-2 pr-4 cursor-pointer">
          <h1 className="hover:text-blue-700">Home</h1>
          <h1 className="hover:text-blue-700">About</h1>
          {darkMode ? (
            <Sun onClick={toggleDarkMode} className={`${buttonStyle}`} />
          ) : (
            <Moon onClick={toggleDarkMode} className={`${buttonStyle}`} />
          )}
        </div>
      </div>

      {/* main-section */}

      <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-2 px-32 py-20">
        <div className="">
          <h1 className="text-5xl font-semibold">
            Your resume in three <span className="text-teal-500">easy</span> steps
          </h1>
          <p className="text-gray-500 font-normal leading-6 mt-8">
            Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a
            professional-looking resume in a few easy steps. This resume builder offer different template options, so
            you can select the template that best fits your needs and style.
          </p>
          <p>
            <p>
              <span>1</span>Select a template from our collection.
            </p>
            <p>
              <span>2</span>Build you resume using our easy to use resume builder.
            </p>
            <p>
              <span>3</span>Download your resume.
            </p>
          </p>
        </div>

        <div className="image"></div>
      </div>
    </div>
  );
}
