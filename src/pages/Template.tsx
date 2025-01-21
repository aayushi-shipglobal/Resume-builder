import { Link } from "react-router-dom";
import temp1 from "../assets/template1.png";
import temp2 from "../assets/Template2.jpg";
import temp3 from "../assets/Template3.jfif";
import temp4 from "../assets/template4.jpg";
import { Button } from "@/components/ui/button";

export default function Template() {
  return (
    <div className="grid lg:grid-cols-3 lg:col-span-3  md:px-6 dark:bg-gray-900 pb-14">
      <div className="text-3xl font-semibold mx-8 pt-4 text-center md:text-5xl lg:text-6xl md:text-start md:mx-3 md:mb-4 lg:mt-56 dark:text-white lg:col-span-1">
        Select a <span className="text-teal-500">Template</span> from the list
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4 lg:mt-16 text-center gap-y-6 gap-x-4 mx-auto pb-4 h-72 overflow-y-auto lg:h-100 lg:col-span-2">
        <Temp temp={temp1} />
        <Temp temp={temp2} />
        <Temp temp={temp3} />
        <Temp temp={temp4} />
      </div>
    </div>
  );
}

const Temp = ({ temp }: { temp: string }) => {
  return (
    <Link to="/home/resume" className="inline-block group">
      <img src={temp} className="border border-black rounded-xl h-72 w-full object-cover" />
      <Button className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-40 transition-all duration-300 transform group-hover:scale-105 text-white bg-gradient-to-br from-teal-500 to-gray-500 sm:group-hover:-translate-y-20 lg:group-hover:-translate-y-40">
        Use Template
      </Button>
    </Link>
  );
};
