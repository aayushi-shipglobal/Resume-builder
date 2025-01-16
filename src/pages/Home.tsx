import Image from "../assets/img.png";
import { Button } from "@/components/ui/button";

const Arrays = [
  { title: "Select a template from our collection." },
  { title: "Build you resume using our easy to use resume builder." },
  { title: "Download your resume." },
];

const style = "px-3 py-1.5 bg-slate-100 rounded-md mr-1 text-sm font-medium h-8 dark:bg-gray-800 dark:text-white";

export default function Home() {
  return (
    <>
      {/* main-section */}
      <div className="grid lg:space-x-16 lg:grid-cols-2 px-10 py-4 md:py-20 md:px-24 lg:px-28 lg:pt-8 dark:bg-gray-900 lg:overflow-hidden">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-5xl lg:pt-4 text-center font-semibold dark:text-white">
            Your resume in three <span className="text-teal-500">easy</span> steps
          </h1>
          <p className="text-gray-500 text-base md:text-sm font-normal leading-6 mt-8 text-center">
            Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a
            professional-looking resume in a few easy steps. This resume builder offer different template options, so
            you can select the template that best fits your needs and style.
          </p>
          <div className="leading-10 mt-7 dark:text-gray-400">
            <Step />
          </div>
        </div>
        <div className="2xl:px-32">
          <img src={Image} className="h-96 w-full text-center mx-6" />
          <Button variant="outline" className="rounded-full bg-teal-500 text-white dark:text-black w-full text-sm m-6">
            Select Template
          </Button>
        </div>
      </div>
    </>
  );
}
const Step = () => {
  return (
    <div>
      {Arrays.map((item, index) => (
        <div key={index} className="flex my-2 items-center">
          <span className={`${style}`}>{index + 1}</span>
          <p className="leading-5">{item.title}</p>
        </div>
      ))}
    </div>
  );
};
