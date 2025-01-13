import Image from "../assets/img.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  const style = "px-3 py-1.5 bg-slate-100 rounded-md mr-1 text-sm font-medium h-8";

  return (
    <div>
      {/* main-section */}

      <div className="grid lg:space-x-16 md:grid-cols-2 px-6 py-4 md:py-20 md:px-16 lg:px-32 lg:py-24">
        <div>
          <h1 className="text-3xl sm:text-3xl md:text-6xl lg:text-5xl lg:pt-4  text-center font-semibold">
            Your resume in three <span className="text-teal-500">easy</span> steps
          </h1>
          <p className="text-gray-500 text-base sm:text-base md:text-sm font-normal leading-6 mt-8 text-center">
            Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a
            professional-looking resume in a few easy steps. This resume builder offer different template options, so
            you can select the template that best fits your needs and style.
          </p>
          <div className="leading-10 mt-7">
            <div className="flex my-2 items-center">
              <span className={`${style}`}>1</span>
              <p className="leading-5">Select a template from our collection.</p>
            </div>
            <div className="flex my-2 items-center">
              <span className={`${style}`}>2</span>
              <p className="leading-5">Build you resume using our easy to use resume builder.</p>
            </div>
            <div className="flex my-2 items-center">
              <span className={`${style}`}>3</span>
              <p className="leading-5">Download your resume.</p>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={Image} className="h-96 w-full text-center mx-6"/>
          <Button variant="outline" className="rounded-full bg-teal-500 text-white w-full text-sm m-6">
            Select Template
          </Button>
        </div>
      </div>
    </div>
  );
}
