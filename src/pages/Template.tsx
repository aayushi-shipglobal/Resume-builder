import { Link } from "react-router-dom";
import temp1 from "../assets/template1.png";
import temp2 from "../assets/Template2.jpg";
import temp3 from "../assets/Template3.jfif";
import temp4 from "../assets/template4.jpg";

export default function Template() {
  return (
    <div className="grid lg:grid-cols-3 lg:col-span-3  md:px-6 dark:bg-gray-900 pb-14">
      <div className="text-3xl font-semibold mx-8 pt-4 text-center md:text-5xl lg:text-6xl md:text-start md:mx-3 md:mb-4 lg:mt-56 dark:text-white lg:col-span-1">
        Select a <span className="text-teal-500">Template</span> from the list
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4 lg:mt-16 text-center gap-y-6 gap-x-4 mx-auto pb-4 h-72 lg:h-full overflow-scroll lg:overflow-hidden lg:col-span-2">
        <Link to={"#"}>
          <img src={temp1} className="border border-black rounded-xl h-72"/>
        </Link>
        <Link to={"#"}>
          <img src={temp2} className="border border-black rounded-xl h-72"/>
        </Link>
        <Link to={"#"}>
          <img src={temp3} className="border border-black rounded-xl h-72"/>
        </Link>
        <Link to={"#"}>
          <img src={temp4} className="border border-black rounded-xl h-72"/>
        </Link>
      </div>
    </div>
  );
}
